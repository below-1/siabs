import { db } from '../../../../db'

export async function get(event) {
  const id = parseInt(event.params.id)
  const total = await db.absen.count({
    where: {
      jadwalId: id
    }
  })
  return {
    status: 200,
    body: {
      total_member: total
    }
  }
}