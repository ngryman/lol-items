# lol-items [![npm][npm-image]][npm-url] [![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/lol-items.svg?style=flat
[npm-url]: https://npmjs.org/package/lol-items
[travis-image]: https://img.shields.io/travis/ngryman/lol-items.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/lol-items

> Simplified, up-to-date, League of Legends items list.


## Install

```
$ npm install --save lol-items
```


## Usage

### Fetch items

```js
import fetch from 'lol-items'

fetch().then((items) => console.log(items))
//=> array of items

// without circular references
fetch({ flat: true }).then((items) => console.log(items))
//=> array of items
```

### Snapshot

```js
import items from 'lol-items/items'

console.log(items)
//=> array of items
```

The snapshot can also be [downloaded].

[downloaded]: https://github.com/ngryman/lol-items/blob/master/items.json


## License

MIT © [Nicolas Gryman](http://ngryman.sh)
