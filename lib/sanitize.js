import values from 'object-values'

import { IMAGES_URL } from 'lol-items/constants'

let Sanitizers = {
  icon(item) {
    item.icon = `${IMAGES_URL}/item/${item.image.full}`
    item.sprite = {
      url: `${IMAGES_URL}/sprite/${item.image.sprite}`,
      x: item.image.x,
      y: item.image.y
    }
    delete item.image
  },

  into(item, baton) {
    if (baton.options.flat) return
    if (!item.into) return
    item.into = item.into.map((id) => baton.itemsMap[id])
  },

  from(item, baton) {
    if (baton.options.flat) return
    if (!item.from) return
    item.from = item.from.map((id) => baton.itemsMap[id])
  },

  gold(item) {
    item.price = item.gold
    item.purchasable = item.price.purchasable
    delete item.price.purchasable
    delete item.gold
  },

  omit(item) {
    delete item.colloq
    delete item.maps
  }
}

export default function(item, baton) {
  for (let sanitize of values(Sanitizers)) {
    sanitize(item, baton)
  }
}
