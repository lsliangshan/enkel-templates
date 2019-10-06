import { $$qy$$Store, getItem } from '../../utils/localforage'

export function get$$Qy$$Info (key) {
  return new Promise(async (resolve) => {
    await getItem({
      key: key,
      store: $$qy$$Store
    }).then(data => {
      resolve(data)
    })
  })
}

export function set$$Qy$$Info (key, data, expiredAt) {
  return new Promise(async (resolve) => {
    await setItem({
      key: key,
      expiredAt: expiredAt || 1 * 60 * 60 * 1000,
      store: $$qy$$Store,
      data: data
    })
    resolve(true)
  })
}