import stateFactory from './model/state'
import renderPageFactory from './components/page/page'
import teams from './model/teams'
import players from './model/players'

const rootNode = document.getElementById('root')

const state = stateFactory()

const renderPage = renderPageFactory(state)

const renderApp = newState => {
  const newChild = renderPage(newState)

  if (rootNode.firstChild) {
    rootNode.replaceChild(newChild, rootNode.firstChild)
  } else {
    rootNode.appendChild(newChild)
  }
}

state.addChangeListener(newState => console.log('State Changed', newState))
state.addChangeListener(newState => window.requestAnimationFrame(() => renderApp(newState)))

const init = () => {
  state.startLoading()
  Promise.all([teams.get(), players.get()]).then(([teams, players]) => {
    state.setTeams(teams)
    state.setPlayers(players)
    state.stopLoading()
  })
}

init()
