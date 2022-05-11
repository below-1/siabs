import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import { db } from './db';

export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies.userid || uuid();

	if (event.url.pathname.startsWith('/app')) {
		if (cookies && cookies.token) {
			const authSession = await db.login.findFirst({
				where: {
					token: cookies.token,
					expiredAt: {
						gt: new Date()
					},
				},
				include: {
					user: {
						include: {
							pegawai: true
						}
					}
				}
			})
			if (authSession) {
				event.locals.authSession = authSession
			} else {
				return {
					status: 303,
					headers: {
						location: '/auth/signin',
					}
				}
			}
		} else {
			return {
				status: 303,
				headers: {
					location: '/auth/signin',
				}
			}
		}
	}
	
	const response = await resolve(event);
	if (!cookies.userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set(
			'set-cookie',
			cookie.serialize('userid', event.locals.userid, {
				path: '/',
				httpOnly: true
			})
		);
	}

	return response;
};

export async function getSession(event) {
	return event.locals.authSession ? event.locals.authSession : {}
}
