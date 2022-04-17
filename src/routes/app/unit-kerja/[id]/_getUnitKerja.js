import { db } from '../../../../db'

export async function getUnitKerja(id) {
  try {
    const unitKerja = await db.unitKerja.findFirst({
      where: {
        id
      }
    })
    return unitKerja
  } catch (err) {
    console.log(err)
    throw err;
  }
}