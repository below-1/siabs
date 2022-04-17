import { db } from '../../../db'

export async function get(event) {
  const user = event.locals.authSession.user

  let items = []
  // Only 
  if (user.pegawai.isAdminUnitKerja) {
    const current_unit_kerja_id = user.pegawai.unitKerjaId
    const uk = await db.unitKerja.findFirst({
      id: current_unit_kerja_id
    })
    items.push(uk)
  } else if (user.isSuperAdmin) {
    items = await db.unitKerja.findMany({})
  }
  const unitKerjaOptions = items.map(it => ({
    value: it.id,
    text: it.nama
  }))

  return {
    body: {
      unitKerjaOptions
    }
  }
}

export async function post(event) {
  const data = await event.request.formData();
  let pegawai_data = {
    nama: data.get('nama'),
    nik: data.get('nik'),
  }
  if (data.get('nip')) {
    pegawai_data.nip = data.get('nip')
  }
  const payload = {
    
    longitude: data.get('longitude')
  }
  const result = await db.pegawai.create({
    data: {
      ...pegawai_data,
      unitKerja: {
        connect: {
          id: parseInt(data.get('unitKerjaId'))
        }
      },
      user: {
        create: {
          username: data.get('username'),
          password: data.get('password')
        }
      }
    },
  })
  return {
    status: 303,
    headers: {
      location: '/app/pegawai'
    }
  }
}