const Test = require('tape')
const Sinon = require('sinon')

const handler = require('../../../../src/server/handlers/test1')

Test('Test 1 Handler: GET', async (t) => {
  t.plan(2)
  const result = await handler.get()
  t.ok(result, 'Get a result.')
  t.ok(Array.isArray(result), 'Is Array')
})

Test('Test 1 Handler: Post', async (t) => {
  t.plan(2)
  const h = { response () {} }
  const mock = Sinon.mock(h)
  const stub = Sinon.stub()
  mock.expects('response').once().returns({ code: stub })
  await handler.post(null, h)
  t.ok(mock.verify())
  t.ok(stub.calledOnce)
  mock.restore()
  stub.reset()
})
