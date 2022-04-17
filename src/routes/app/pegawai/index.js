import { db } from '../../../db'

export async function get(event) {
  let response = {}
  response.status = 200
  response.body = {}
  const items = await db.pegawai.findMany({
    include: {
      unitKerja: true
    }
  })
  response.body.items = items
  return response
}