import { db } from '../../../../db'

export async function get(event) {
  const id = parseInt(event.params.id)
  const absen = await db.absen.findFirst({
    where: {
      id
    },
    include: {
      pegawai: true,
      jadwal: {
        include: {
          unitKerja: true
        }
      }
    }
  })
  return {
    status: 200,
    body: {
      absen
    }
  }
}