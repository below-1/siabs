export async function get(event) {
  return {
    status: 303,
    headers: {
      location: '/auth/signin',
      'Set-Cookie': `token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    }
  }
}
