clay-resource-cache
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/clay-resource-cache
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/clay-resource-cache
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/clay-resource-cache.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/clay-resource-cache
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/clay-resource-cache.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/clay-resource-cache/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/clay-resource-cache
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/clay-resource-cache.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/clay-resource-cache.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/clay-resource-cache
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/clay-resource-cache.svg
[bd_npm_url]: http://www.npmjs.org/package/clay-resource-cache
[bd_npm_shield_url]: http://img.shields.io/npm/v/clay-resource-cache.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Cache handler for clay-resources

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install clay-resource-cache --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/10.API Guide.md.hbs" Start -->

<a name="section-doc-guides-10-api-guide-md"></a>

API Guide
-----

+ [clay-resource-cache@2.0.2](./doc/api/api.md)
  + [create(args)](./doc/api/api.md#clay-resource-cache-function-create)
  + [ClayResourceCache](./doc/api/api.md#clay-resource-cache-class)


<!-- Section from "doc/guides/10.API Guide.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/clay-resource-cache/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
