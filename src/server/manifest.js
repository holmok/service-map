const Path = require('path')

const Config = require('../../config')
const logging = Config.get('/logging')
const server = Config.get('/server')
const openapi = Config.get('/openapi')

openapi.handlers = Path.join(process.cwd(), openapi.handlers)

const manifest = {
  server,
  register: {
    plugins: [
      { plugin: require('hapi-openapi'), options: openapi },
      { plugin: require('hapi-pino'), options: logging }
    ]
  }
}

module.exports = manifest
