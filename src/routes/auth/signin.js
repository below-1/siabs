import { db } from '../../db'
import { random_chars } from '$lib/util';
import dayjs from 'dayjs'

export async function post(event) {
  const data = await event.request.formData();
  const username = data.get('username')
  const password = data.get('password')
  const user = await db.user.findFirst({
    where: {
      username
    },
    include: {
      pegawai: true
    }
  })
  if (!user) {
    return {
      body: {
        errors: {
          username: `Tidak dapat menemukan user dengan nama ${username}`
        }
      }
    }
  }
  if (password != user.password) {
    return {
      body: {
        errors: {
          password: `Password tidak cocok`
        }
      }
    }
  }
  let currentLogin = await db.login.findFirst({
    where: {
      userId: user.id,
      createdAt: {
        gt: new Date()
      }
    }
  })
  if (!currentLogin) {
    currentLogin = await db.login.create({
      data: {
        token: random_chars(12),
        expiredAt: dayjs().add(1, 'day').toDate(),
        user: {
          connect: {
            id: user.id
          }
        }
      }
    })    
  }
  let cookies = []
  cookies.push(`token=${currentLogin.token}; Path=/`)
  return {
    status: 302,
    headers: {
      location: '/app',
      'Set-Cookie': cookies
    }
  }
}