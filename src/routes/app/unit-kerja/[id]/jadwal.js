import { db } from '../../../../db'

export async function get(event) {
  const unitKerjaId = parseInt(event.params.id)
  const items = await db.jadwal.findMany({
    where: {
      unitKerjaId
    },
    include: {
      _count: {
        select: { absen: true }
      },
      unitKerja: true
    }
  })
  return {
    body: {
      items
    }
  }
}