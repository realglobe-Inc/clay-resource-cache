/**
 * Cache handler for clay-resources
 * @module clay-resource-cache
 */

'use strict'

const create = require('./create')
const ClayResourceCache = require('./clay_resource_cache')

let lib = create.bind(this)

Object.assign(lib, ClayResourceCache, {
  create,
  ClayResourceCache
})

module.exports = lib
