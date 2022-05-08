import day from '../day'

export function date(jadwal) {
  let result = {...jadwal}
  if (!result.formatted) {
    result.formatted = {}
  }
  result.formatted.hari = day(jadwal.hari).format('dddd, DD MMMM, YYYY')
  result.formatted.waktu = day(jadwal.waktu).format('[Pukul] HH:mm')
  return result
}