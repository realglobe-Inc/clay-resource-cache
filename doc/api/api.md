# clay-resource-cache@1.0.0

Cache handler for clay-resources

+ Functions
  + [create(args)](#clay-resource-cache-function-create)
+ [`ClayResourceCache`](#clay-resource-cache-class) Class
  + [new ClayResourceCache()](#clay-resource-cache-class-clay-resource-cache-constructor)
  + [cache.store(entity)](#clay-resource-cache-class-clay-resource-cache-store)
  + [cache.get(id)](#clay-resource-cache-class-clay-resource-cache-get)
  + [cache.remove(id)](#clay-resource-cache-class-clay-resource-cache-remove)
  + [cache.clear()](#clay-resource-cache-class-clay-resource-cache-clear)
  + [cache.invalidate()](#clay-resource-cache-class-clay-resource-cache-invalidate)

## Functions

<a class='md-heading-link' name="clay-resource-cache-function-create" ></a>

### create(args) -> `ClayResourceCache`

Create a ClayResourceCache instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="clay-resource-cache-class"></a>

## `ClayResourceCache` Class

Cache for resource




<a class='md-heading-link' name="clay-resource-cache-class-clay-resource-cache-constructor" ></a>

### new ClayResourceCache()

Constructor of ClayResourceCache class



<a class='md-heading-link' name="clay-resource-cache-class-clay-resource-cache-store" ></a>

### cache.store(entity)

Store an entity cache

| Param | Type | Description |
| ----- | --- | -------- |
| entity | ClayEntity | Entity to save |


<a class='md-heading-link' name="clay-resource-cache-class-clay-resource-cache-get" ></a>

### cache.get(id) -> `ClayEntity`

Get an entity cache

| Param | Type | Description |
| ----- | --- | -------- |
| id | ClayId |  |


<a class='md-heading-link' name="clay-resource-cache-class-clay-resource-cache-remove" ></a>

### cache.remove(id)

Remove cache

| Param | Type | Description |
| ----- | --- | -------- |
| id | ClayId |  |


<a class='md-heading-link' name="clay-resource-cache-class-clay-resource-cache-clear" ></a>

### cache.clear()

Clear all caches

<a class='md-heading-link' name="clay-resource-cache-class-clay-resource-cache-invalidate" ></a>

### cache.invalidate()

Invalidate caches


