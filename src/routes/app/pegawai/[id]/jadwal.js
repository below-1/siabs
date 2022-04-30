import { db } from '../../../../db'

export async function get(event) {
  const pegawaiId = parseInt(event.params.id)
  const items = await db.jadwal.findMany({
    where: {
      pegawaiId
    },
    include: {
      pegawai: true,
      unitKerja: true,
      absen: true
    }
  })
  console.log('items')
  console.log(items)
  return {
    status: 200,
    body: {
      items
    }
  }
}