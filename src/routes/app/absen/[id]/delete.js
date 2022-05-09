import { db } from '../../../../db'

export async function get(event) {
  const id = parseInt(event.params.id)
  const deletedAbsen = await db.absen.delete({
    where: { id }
  })

  return {
    status: 303,
    headers: {
      location: `/app/jadwal/${deletedAbsen.jadwalId}/member`
    }
  }
}