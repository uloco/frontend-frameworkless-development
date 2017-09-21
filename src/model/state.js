let changeListeners = []

const data = {
  players: [],
  teams: [],
  maxPlayersPerTeam: 5,
  loadingCounter: 0
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

const changeTeam = (playerId, teamId) => {
  const player = data.players.find(player => player.id === playerId)
  if (!player) {
    return
  }

  player.team = parseInt(teamId) >= 0 ? parseInt(teamId) : false
  invokeListeners()
}

const clear = () => {
  data.players.forEach(player => { player.team = false })
  invokeListeners()
}

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const getPlayersPerTeam = (players, teamId) => players.filter(player => player.team === teamId).length

const random = () => {
  data.players.forEach(player => { player.team = false })
  data.players.forEach(player => {
    do {
      const randomIndex = randomInt(0, data.teams.length - 1)
      player.team = data.teams[randomIndex].id
    } while (getPlayersPerTeam(data.players, player.team) > data.maxPlayersPerTeam)
  })
  invokeListeners()
}

export default {
  addChangeListener,
  setTeams,
  setPlayers,
  changeTeam,
  clear,
  random
}

