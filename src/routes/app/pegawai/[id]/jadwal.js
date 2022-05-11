import { db } from '../../../../db'

export async function get(event) {
  const pegawaiId = parseInt(event.params.id)
  const items = await db.absen.findMany({
    where: {
      pegawaiId
    },
    include: {
      jadwal: { 
        include: {
          unitKerja: true
        }
      }
    }
  })
  return {
    body: {
      items
    }
  }
}