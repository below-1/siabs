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

export async function post(event) {
  const jadwalId = parseInt(event.url.searchParams.get('jadwal'))
  const payload = await event.request.json();
  const absen = await db.Absen.create({
    data: {
      workStatus: payload.workStatus,
      jadwal: {
        connect: {
          id: jadwalId
        }
      },
      pegawai: {
        connect: {
          id: payload.pegawaiId
        }
      }
    }
  })
  return {
    status: 201,
    body: {
      absen
    }
  }
}