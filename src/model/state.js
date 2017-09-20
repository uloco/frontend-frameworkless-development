let changeListeners = []

const data = {
  people: [],
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

export default {
  addChangeListener,
  setTeams
}

