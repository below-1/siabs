export async function client_fetch_json(options) {

  let fetch_options = {
    method: options.method,
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  }

  if (options.payload) {
    fetch_options.data = JSON.stringify(payload)
  }

  if (options.params) {
    options.path = options.path + '?' + new URLSearchParams({
      ...options.params
    })
    console.log(options.path)
  }

  const response = await fetch(options.path, fetch_options)
  const result = await response.json()
  return result
}