import { db } from '../../../../db'

export async function get(event) {
  const id = parseInt(event.params.id)
  const updateResult = await db.jadwal.updateMany({
    where: { id },
    data: {
      status: 'Published'
    }
  })
  console.log('updateResult')
  console.log(updateResult)
  return {
    status: 303,
    headers: {
      location: `/app/jadwal/${id}/overview`
    }
  }
}
