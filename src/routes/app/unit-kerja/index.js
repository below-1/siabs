import { db } from '../../../db'

export async function get(event) {
  let response = {}
  let keyword = event.url.searchParams.get('keyword')
  let where = {}
  if (keyword) {
    where.nama = {
      contains: keyword,
      mode: 'insensitive'
    }
  }
  response.status = 200
  response.body = {}
  const items = await db.unitKerja.findMany({ where })
  response.body.items = items
  return response
}