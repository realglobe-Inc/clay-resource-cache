
'use strict'

const LRU = require('lru-cache')

/**
 * Cache for resource
 * @class ClayResourceCache
 */
class ClayResourceCache {
  constructor (options = {}) {
    const {
      max = options.maxSize || 100,
      maxAge = 1000 * 3,
      resourceName
    } = options
    this.resourceName = resourceName
    this.cache = new LRU({ max, maxAge })
  }

  /**
   * Store an entity cache
   * @param {ClayEntity} entity - Entity to save
   */
  store (entity) {
    if (!entity) {
      return
    }
    const { id } = entity
    if (!id) {
      return
    }
    this.cache.set(String(id), entity)
  }

  /**
   * Get an entity cache
   * @param {ClayId|ClayEntity} id
   * @returns {?ClayEntity}
   */
  gain (id) {
    return this.cache.get(String(id))
  }

  /**
   * Remove cache
   * @param {ClayId} id
   */
  remove (id) {
    if (!id) {
      return
    }
    this.cache.del(String(id.id || id))
  }

  /**
   * Clear all caches
   */
  clear () {
    this.cache.reset()
  }

  /**
   * Cache length
   * @property {number}
   */
  get size () {
    return this.cache.length
  }

}

module.exports = ClayResourceCache
