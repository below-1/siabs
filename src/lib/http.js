export async function client_fetch_json({ path, method, payload }) {
  const response = await fetch(path, {
    method,
    data: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  })
  const result = await response.json()
  return result
}