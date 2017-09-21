import DATA from '../data/players.json'

const TIMEOUT = 1000

export default {
  get: () => new Promise(resolve => {
    setTimeout(() => {
      resolve(DATA)
    }, TIMEOUT)
  })
}
