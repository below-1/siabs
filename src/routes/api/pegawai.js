import { db } from '../../db.js'

export async  function get(event) {
  const keyword = event.url.searchParams.get('keyword')
  const items = await db.pegawai.findMany({
    where: {
      nama: {
        contains: keyword,
      }
    }
  })
  return {
    body: {
      items
    }
  }
}
