import { db } from '../../../../db'

export async function get(event) {
  const jadwalId = parseInt(event.params.id)
  let where = { jadwalId }
  let keyword = event.url.searchParams.get('keyword')
  if (keyword) {
    where.pegawai = {
      nama: {
        contains: keyword,
        mode: 'insensitive'
      }
    }
  }
  const absens = await db.absen.findMany({
    where,
    include: {
      pegawai: true
    }
  })
  console.log('members')
  console.log(absens)
  return {
    status: 200,
    body: {
      members: absens
    }
  }
}