import { db } from '../../../../db'

export async function get(event) {
  const unitKerja = await db.unitKerja.findFirst({
    where: {
      id: parseInt(event.params.id)
    }
  })
  return {
    status: 200,
    body: {
      unitKerja
    }
  }
}