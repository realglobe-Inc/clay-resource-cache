'use strict'

const clayResourceCache = require('clay-resource-cache')
const clayEntity = require('clay-entity')

{
  const cache = clayResourceCache({
    max: 1000,
    maxAge: 1000 * 60 * 60
  })

  const entity01 = clayEntity({
    name: 'The entity 01'
  })

  cache.store(entity01)

  const cached = cache.get(entity01.id)
  console.log(cached) // Get cached entity
}
