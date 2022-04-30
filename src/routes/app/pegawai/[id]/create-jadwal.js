import { db } from '../../../../db'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export async function get(event) {
  let response = {
    status: 200,
    body: {}
  };
  const unitKerjaItems = await db.unitKerja.findMany()
  response.body.unitKerjaOptions = unitKerjaItems.map(it => ({
    value: it.id,
    text: it.nama
  }))
  return response
}

export async function post(event) {
  const data = await event.request.formData()
  const user = event.locals.authSession.user
  const status = data.get('status')
  const pegawaiId = parseInt(event.params.id)
  const hari = data.get('hari')
  const waktu = data.get('waktu')
  const t = dayjs(`${hari} ${waktu}`, 'YYYY-MM-DD HH:mm').toDate()
  // throw new Error('stop')
  let payload = {
    hari: t,
    waktu: t,
    status: data.get('status'),
    createdBy: {
      connect: {
        id: user.id
      }
    },
    pegawai: {
      connect: {
        id: pegawaiId
      }
    }
  };
  if (status != 'DinasLuar') {
    payload = {
      ...payload,
      unitKerja: {
        connect: {
          id: parseInt(data.get('unitKerjaId'))
        }
      }
    }
  } else {
    payload = {
      ...payload,
      dl_nama: data.get('dl_nama'),
      dl_latitude: data.get('dl_latitude'),
      dl_longitude: data.get('dl_longitude'),
    }
  }
  const jadwal = await db.jadwal.create({
    data: payload
  })
  return {
    status: 303,
    headers: {
      location: `/app/pegawai/${event.params.id}/jadwal`
    }
  }
}