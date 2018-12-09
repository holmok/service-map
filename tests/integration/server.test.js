const Test = require('tape')
const Server = require('../../src/server')

let server

Test('Set Up', async (t) => {
  t.plan(1)
  server = await Server.getServer()
  t.ok(server, 'Created server.')
})

Test('GET /api/test1', async (t) => {
  t.plan(2)
  const { statusCode, payload } = await server.inject('/api/test1')
  t.ok(payload, 'Got payload')
  t.equals(statusCode, 200, 'Status Code = 200')
})

Test('GET /api/test2', async (t) => {
  t.plan(2)
  const { statusCode, payload } = await server.inject('/api/test2')
  t.ok(payload, 'Got payload')
  t.equals(statusCode, 200, 'Status Code = 200')
})

Test('POST /api/test1 (good)', async (t) => {
  t.plan(2)
  const { statusCode, payload } = await server.inject({
    url: '/api/test1',
    method: 'POST',
    payload: { name: 'name', value: 1 }
  })
  t.equals(payload, '', 'Got payload')
  t.equals(statusCode, 200, 'Status Code = 200')
})

Test('POST /api/test2 (good)', async (t) => {
  t.plan(2)
  const { statusCode, payload } = await server.inject({
    url: '/api/test1',
    method: 'POST',
    payload: { name: 'name', value: 1 }
  })
  t.equals(payload, '', 'Got payload')
  t.equals(statusCode, 200, 'Status Code = 200')
})

Test('POST /api/test1 (bad)', async (t) => {
  t.plan(1)
  const { statusCode } = await server.inject({
    url: '/api/test1',
    method: 'POST',
    payload: { }
  })
  t.equals(statusCode, 400, 'Status Code = 400')
})

Test('POST /api/test2 (bad)', async (t) => {
  t.plan(1)
  const { statusCode } = await server.inject({
    url: '/api/test2',
    method: 'POST',
    payload: { }
  })
  t.equals(statusCode, 400, 'Status Code = 400')
})

Test('Tear Down', async (t) => {
  t.plan(1)
  await server.stop()
  t.pass('Server stopped')
})
