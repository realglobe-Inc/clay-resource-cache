/**
 * Create a ClayResourceCache instance
 * @function create
 * @param {...*} args
 * @returns {ClayResourceCache}
 */
'use strict'

const ClayResourceCache = require('./clay_resource_cache')

/** @lends create */
function create (...args) {
  return new ClayResourceCache(...args)
}

module.exports = create
