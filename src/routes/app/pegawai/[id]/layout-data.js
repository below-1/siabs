import { db } from '../../../../db'

export async function get(event) {
  const pegawai = await db.pegawai.findFirst({
    where: {
      id: parseInt(event.params.id)
    }
  })
  console.log('pegawai')
  console.log(pegawai)
  return {
    status: 200,
    body: {
      pegawai
    }
  }
}