import { db } from '../../../../db'

export async function get(event) {
  const jadwal = await db.jadwal.findFirst({
    where: {
      id: parseInt(event.params.id)
    },
    include: {
      createdBy: true,
      unitKerja: true
    }
  })
  return {
    status: 200,
    body: {
      jadwal
    }
  }
}