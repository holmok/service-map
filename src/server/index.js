const Glue = require('glue')

const Manifest = require('./manifest')
const Options = require('./options')

async function getServer () {
  const server = await Glue.compose(Manifest, Options)
  return server
}

module.exports = { getServer }
