import { db } from '../../../../db'

export async function post(event) {
  const data = await event.request.formData();
  const id = parseInt(event.params.id)
  let pegawai_data = {
    nama: data.get('nama'),
    nik: data.get('nik'),
    nip: data.get('nip'),
  }
  const updateResult = await db.pegawai.update({
    where: {
      id
    },
    data: pegawai_data
  })
  console.log('updateResult')
  console.log(updateResult)
  return {
    status: 303,
    headers: {
      location: `/app/pegawai/${id}/overview`
    }
  }
}