import { db } from '../../../db'

export async function get(event) {
  let response = {}
  response.status = 200
  response.body = {}
  let where = {}
  let keyword = event.url.searchParams.get('keyword')
  console.log(`got keyword = `, keyword)
  if (keyword) {
    where.nama = {
      contains: keyword,
      mode: 'insensitive'
    }
  }
  const items = await db.pegawai.findMany({ where })
  response.body.items = items
  return response
}