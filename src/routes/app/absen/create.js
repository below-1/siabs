import { db } from '../../../db'
import dayjs from 'dayjs'

export async function get(event) {
  const jadwalId = parseInt(event.url.searchParams.get('jadwal'))
  const jadwal = await db.jadwal.findFirst({
    where: {
      id: jadwalId
    },
    include: {
      unitKerja: true
    }
  })
  return {
    body: {
      jadwal
    }
  }
}