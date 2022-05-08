import { db } from '../../../db'

export async function get(event) {
  const items = await db.jadwal.findMany({
    include: {
      _count: {
        select: { absen: true }
      },
      unitKerja: true
    }
  })
  return {
    status: 200,
    body: {
      items
    }
  }
}