async function get (request, h) {
  return [{ name: 'happy', value: 1 }]
}

async function post (request, h) {
  return h.response().code(200)
}

module.exports = { get, post }
