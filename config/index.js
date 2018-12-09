const Confidence = require('confidence')
const config = require('./config')
const debug = require('debug')('fuali:config')

const store = new Confidence.Store()

debug('Loading configuration...')
store.load(config)
debug('...configuration loaded.')

const criteria = { 'env': process.env.NODE_ENV }

function get (key) {
  return store.get(key, criteria)
}

module.exports = { get }
