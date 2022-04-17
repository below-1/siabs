import { getUnitKerja } from './_getUnitKerja'
import { db } from '../../../../db'

export async function get(event) {
  const unitKerja = await getUnitKerja(parseInt(event.params.id))
  let response = {}
  response.status = 200
  response.body = {}
  response.body.item = unitKerja
  return response
}

export async function post(event) {
  const data = await event.request.json();
  const id = parseInt(event.params.id)
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