import fetch from './'
import got from 'got'
import test from 'blue-tape'

const res = fetch()

test('Fetches items list from League of Legends API', (t) => res.then((items) => {
  t.assert(Array.isArray(items), 'items is an array')
}))

test('Adds "id"', (t) => res.then((items) => {
  let item = items[0]
  t.assert(!!item.id, 'id property exists')
}))

test('Transmutes "image" object into an valid URL', (t) => res
.then((items) => {
  let item = items[0]
  t.assert(!item.image, 'image property is gone')
  return item
})
.then((item) => got(item.icon)))

test('Transmutes "into" into an array of items', (t) => res.then((items) => {
  let item = items[0]
  t.assert(item.into, 'into property is an array')
  t.equal(typeof item.into[0], 'object', 'into property contains item references')
}))

test('Transmutes "from" into an array of items', (t) => res.then((items) => {
  let item = items[3]
  t.assert(item.from, 'from property is an array')
  t.equal(typeof item.from[0], 'object', 'from property contains item references')
}))

test('Transmutes "gold" into "price"', (t) => res.then((items) => {
  let item = items[0]
  t.assert(!item.gold, 'gold property is gone')
  t.assert(item.price, 'price property is present')
  t.assert(item.purchasable, 'purchasable property is present')
}))

test('Keeps a set of properties', (t) => res.then((items) => {
  let item = items[0]
  t.assert(!item.colloq, 'colloq property is gone')
  t.assert(!item.maps, 'maps property is gone')
}))

test('Allows keeping a flat structure (for export)', (t) => fetch({ flat: true })
.then((items) => {
  t.equal(typeof items[0].into[0], 'string', 'into property is an id')
  t.equal(typeof items[3].from[0], 'string', 'from property is an id')
}))
