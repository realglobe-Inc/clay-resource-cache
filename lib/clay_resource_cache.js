/**
 * Cache for resource
 * @class ClayResourceCache
 */
'use strict'

const LRU = require('lru-cache')

/** @lends ClayResourceCache */
class ClayResourceCache {
  constructor (options = {}) {
    const s = this
    const {
      max = options.maxSize || 100,
      maxAge = 1000 * 60 * 60,
      resourceName
    } = options
    s.resourceName = resourceName
    s.cache = LRU({max, maxAge})
  }

  /**
   * Store an entity cache
   * @param {ClayEntity} entity - Entity to save
   */
  store (entity) {
    const s = this
    if (!entity) {
      return
    }
    const {id} = entity
    if (!id) {
      return
    }
    s.cache.set(String(id), entity)
  }

  /**
   * Get an entity cache
   * @param {ClayId|ClayEntity} id
   * @returns {?ClayEntity}
   */
  gain (id) {
    const s = this
    return s.cache.get(String(id))
  }

  /**
   * Remove cache
   * @param {ClayId} id
   */
  remove (id) {
    const s = this
    if (!id) {
      return
    }
    s.cache.del(String(id.id || id))
  }

  /**
   * Clear all caches
   */
  clear () {
    const s = this
    s.cache.reset()
  }

  /**
   * Cache length
   * @property {number}
   */
  get size () {
    const s = this
    return s.cache.length
  }

}

module.exports = ClayResourceCache
