import { db } from '../../db'

export async function post(event) {
  console.log('got post...')
  console.log(event.body)
  return {
    status: 303,
    headers: {
      location: '/'
    }
  }
}
