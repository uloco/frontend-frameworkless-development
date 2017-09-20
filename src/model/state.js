let changeListeners = []

const data = {
  players: [],
  teams: []
}

const invokeListeners = () => {
  changeListeners.forEach(cb => cb(get()))
}

const get = () => Object.freeze(Object.assign({}, data))

const addChangeListener = cb => {
  changeListeners.push(cb)
  cb(get())
  return () => {
    changeListeners = changeListeners.filter(element => element === cb)
  }
}

const setTeams = teams => {
  data.teams = [...teams]
  invokeListeners()
}

const setPlayers = players => {
  data.players = [...players]
  invokeListeners()
}

export default {
  addChangeListener,
  setTeams,
  setPlayers
}

