import { db } from '../../../../db'
import { imagekit } from '../../../../upload'

export async function post(event) {
  const data = await event.request.formData();
  const id = parseInt(event.params.id)
  const avatar = data.get('avatar')
  console.log(avatar)
  throw new Error('stop')
  const buff = await avatar.arrayBuffer()
  const uploadResponse = await imagekit.upload({
    file: buff,
    fileName: avatar.name,
  })
  const avatar_url = uploadResponse.url
  // console.log(avatar.name)
  // console.log(avatar.size)
  let pegawai_data = {
    nama: data.get('nama'),
    nik: data.get('nik'),
    nip: data.get('nip'),
    avatar: avatar_url
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