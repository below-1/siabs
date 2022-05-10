import { getUnitKerja } from './_getUnitKerja'
import { db } from '../../../../db'
import { imagekit } from '../../../../upload'

export async function get(event) {
  const unitKerja = await getUnitKerja(parseInt(event.params.id))
  let response = {}
  response.status = 200
  response.body = {}
  response.body.item = unitKerja
  return response
}

export async function post(event) {
  const fd = await event.request.formData();
  const id = parseInt(event.params.id)
  const avatarFile = fd.get('avatar')
  let avatar = null;
  if (avatarFile) {
    const content = await avatarFile.arrayBuffer()
    const buff =  Buffer.from(new Uint8Array(content))
    // Read content as buffer asynchronously
    const uploadResponse = await imagekit.upload({
      file: buff,
      fileName: avatarFile.name,
    })
    avatar = uploadResponse.url
  }
  let data = {
    nama: fd.get('nama'),
    alamat: fd.get('alamat'),
  }
  if (avatar) {
    data.avatar = avatar
  }
  if (fd.get('latitude')) {
    data.latitude = fd.get('latitude')
  }
  if (fd.get('longitude')) {
    data.longitude = fd.get('longitude')
  }
  const updateResult = await db.unitKerja.update({
    where: {
      id
    },
    data
  })
  let response = {}
  response.status = 200
  response.body = {}
  return response
}