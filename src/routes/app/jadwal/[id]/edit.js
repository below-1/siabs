import { db } from '../../../../db'
import dayjs from 'dayjs'

export async function get(event) {
  const unitKerjaList = await db.unitKerja.findMany({})
  return {
    body: {
      unitKerjaList
    }
  }
}

export async function post(event) {
  const id = parseInt(event.params.id)
  const data = await event.request.formData()
  const ds = data.get('hari') + ' ' + data.get('waktu')
  const d = dayjs(ds, 'YYYY-MM-DD HH:mm')
  let jadwal_data = {
    hari: d.toDate(),
    waktu: d.toDate(),
    type: data.get('type'),
    unitKerja: {
      connect: {
        id: parseInt(data.get('unitKerja'))
      }
    },
    createdBy: {
      connect: {
        id: event.locals.authSession.user.id
      }
    }
  }
  const updateResult = await db.jadwal.update({
    where: {
      id
    },
    data: jadwal_data
  })
  return {
    status: 303,
    headers: {
      location: `/app/jadwal/${id}/overview`
    }
  }
  throw new Error('stop')
}