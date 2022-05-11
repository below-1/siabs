import { db } from '../../../db'

export async function post(event) {
  const payload = await event.request.json()
  const waktu = new Date(payload.waktu)
  console.log('waktu')
  console.log(waktu)
  const updateResult = await db.absen.updateMany({
    where: {
      pegawaiId: payload.pegawaiId,
      jadwal: {
        status: 'Published'
      },
      waktu: null
    },
    data: {
      waktu
    }
  })
  return {
    status: 200,
    body: {
      result: updateResult
    }
  }
}