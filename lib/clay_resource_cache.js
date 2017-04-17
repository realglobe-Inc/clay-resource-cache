/**
 * Cache for resource
 * @class ClayResourceCache
 */
'use strict'

/** @lends ClayResourceCache */
class ClayResourceCache {
  constructor (options = {}) {
    const s = this
    let {
      maxSize = 1000,
      bufferSize = 100,
      resourceName
    } = options
    if (bufferSize > maxSize) {
      throw new Error('bufferSize must be smaller than maxSize')
    }
    s._maxSize = maxSize
    s._bufferSize = bufferSize
    s._entities = new Map()
    s._resourceName = resourceName
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
    let { id } = entity
    if (!id) {
      return
    }
    s._entities.set(String(id), entity)
    s.invalidate()
  }

  /**
   * Get an entity cache
   * @param {ClayId|ClayEntity} id
   * @returns {?ClayEntity}
   */
  gain (id) {
    const s = this
    return s._entities.get(id)
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
    s._entities.delete(String(id.id || id))
  }

  /**
   * Clear all caches
   */
  clear () {
    const s = this
    s._entities.clear()
  }

  /**
   * Cache length
   * @property {number}
   */
  get size () {
    const s = this
    return s._entities.size
  }

  /**
   * Invalidate caches
   */
  invalidate () {
    const s = this
    let needsCleanUp = s.size > s._maxSize
    if (needsCleanUp) {
      let ids = [ ...s._entities.keys() ].slice(0, s._bufferSize)
      for (let id of ids) {
        s.remove(id)
      }
    }
  }
}

module.exports = ClayResourceCache
