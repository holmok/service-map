require('make-promises-safe')
const debug = require('debug')('fuali:server-init')

const { getServer } = require('./src/server')

async function start () {
  debug('Initializing and starting server...')
  const server = await getServer()
  await server.start()
  debug('...server initialized and started.')
}

start()
