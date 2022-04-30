import { db } from '../../../db'

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
      user: {
        create: {
          username: data.get('username'),
          password: data.get('password'),
          superUser: false
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