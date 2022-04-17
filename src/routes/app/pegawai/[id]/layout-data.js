import { db } from '../../../../db'

export async function get(event) {
  console.log(event)
  const pegawai = await db.pegawai.findFirst({
    where: {
      id: parseInt(event.params.id)
    },
    include: {
      unitKerja: true
    }
  })
  return {
    status: 200,
    body: {
      pegawai
    }
  }
}