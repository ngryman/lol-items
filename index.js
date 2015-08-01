import got from 'got'
import sanitize from 'lol-items/sanitize'

import { ITEMS_URL } from 'lol-items/constants'

export default function(options = {}) {
  return got(ITEMS_URL).then((res) => {
    let itemsMap = JSON.parse(res.body).data
    let baton = { itemsMap, options }

    let items = Object.keys(itemsMap)
    .map((id) => itemsMap[id])
    .filter((item) => !item.maps || Object.keys(item.maps).includes('11'))

    for (let item of items) {
      sanitize(item, baton)
    }

    return items
  })
}
