import { db } from '../../../../db'

export async function get(event) {
  const jadwal = await db.jadwal.findFirst({
    where: {
      id: parseInt(event.params.id)
    }
  })
  return {
    status: 200,
    body: {
      jadwal
    }
  }
}