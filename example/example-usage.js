'use strict'

const clayResourceCache = require('clay-resource-cache')
const clayEntity = require('clay-entity')

{
  let cache = clayResourceCache({
    maxSize: 1000,
    bufferSize: 100
  })

  let entity01 = clayEntity({
    name: 'The entity 01'
  })

  cache.store(entity01)

  let cached = cache.get(entity01.id)
  console.log(cached) // Get cached entity
}
