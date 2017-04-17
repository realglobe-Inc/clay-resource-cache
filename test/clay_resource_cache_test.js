/**
 * Test case for clayResourceCache.
 * Runs with mocha.
 */
'use strict'

const ClayResourceCache = require('../lib/clay_resource_cache.js')
const { ok, equal } = require('assert')
const clayEntity = require('clay-entity')
const co = require('co')

describe('clay-resource-cache', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Clay resource cache', () => co(function * () {
    let cache = new ClayResourceCache({
      bufferSize: 3,
      maxSize: 10
    })

    let entity01 = clayEntity({ foo: 'bar' })
    let entity02 = clayEntity({})

    equal(cache.size, 0)
    cache.store(entity01)
    cache.store(entity02)
    equal(cache.size, 2)
    cache.get(entity01.id)
    cache.remove(entity01)
    equal(cache.size, 1)
    cache.remove(entity02.id)
    equal(cache.size, 0)

    for (let i = 0; i < 15; i++) {
      cache.store(clayEntity({}))
      ok(cache.size <= 10)
    }
  }))
})

/* global describe, before, after, it */