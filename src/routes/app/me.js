import { db } from '../../db'

export async function get(event) {
  const authSession = event.locals.authSession
  const isPegawai = !authSession.user.superUser
  if (isPegawai) {
    return {
      status: 200
    }
  } else {
    return {
      status: 303,
      headers: {
        location: `/app/jadwal`
      }
    }
  }
}
