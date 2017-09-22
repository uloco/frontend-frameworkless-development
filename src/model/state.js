const INITIAL_STATE = {
  players: [],
  teams: [],
  maxPlayersPerTeam: 5,
  loadingCounter: 0
}

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const getPlayersPerTeam = (players, teamId) => players.filter(player => player.team === teamId).length
const freeze = state => Object.freeze(Object.assign({}, state))

export default (initialState = INITIAL_STATE) => {
  let state = initialState
  let changeListeners = []

  const invokeListeners = () => changeListeners.forEach(cb => cb(freeze(state)))

  const addChangeListener = cb => {
    changeListeners.push(cb)
    cb(freeze(state))
    return () => {
      changeListeners = changeListeners.filter(element => element !== cb)
    }
  }

  const setTeams = teams => {
    state.teams = [...teams]
    invokeListeners()
  }

  const setPlayers = players => {
    state.players = [...players]
    invokeListeners()
  }

  const changeTeam = (playerId, teamId) => {
    const player = state.players.find(player => player.id === playerId)
    if (!player) {
      return
    }

    player.team = parseInt(teamId) >= 0 ? parseInt(teamId) : false
    invokeListeners()
  }

  const clear = () => {
    state.players.forEach(player => { player.team = false })
    invokeListeners()
  }

  const random = () => {
    state.players.forEach(player => { player.team = false })
    state.players.forEach(player => {
      do {
        const randomIndex = randomInt(0, state.teams.length - 1)
        player.team = state.teams[randomIndex].id
      } while (getPlayersPerTeam(state.players, player.team) > state.maxPlayersPerTeam)
    })
    invokeListeners()
  }

  const startLoading = () => {
    state.loadingCounter++
    invokeListeners()
  }

  const stopLoading = () => {
    state.loadingCounter--
    if (state.loadingCounter < 0) {
      state.loadingCounter = 0
    }
    invokeListeners()
  }

  return {
    addChangeListener,
    setTeams,
    setPlayers,
    changeTeam,
    clear,
    random,
    startLoading,
    stopLoading
  }
}
