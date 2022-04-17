import { db } from '../../../db'

export async function post(event) {
  const data = await event.request.formData();
  const payload = {
    nama: data.get('nama'),
    alamat: data.get('alamat'),
    latitude: data.get('latitude'),
    longitude: data.get('longitude')
  }
  const result = await db.unitKerja.create({
    data: payload
  })
  return {
    status: 303,
    headers: {
      location: '/app/unit-kerja'
    }
  }
}