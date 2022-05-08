import { db } from '../../../../db'

export async function get(event) {
  const absens = await db.absen.findMany({
    where: {
      jadwalId: parseInt(event.params.id)
    },
    include: {
      pegawai: true
    }
  })
  return {
    status: 200,
    body: {
      members: absens
    }
  }
}