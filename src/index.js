import observableStateFactory from './observable-state'
import renderPageFactory from './components/page/page'
import teamsAPI from './services/teams'
import playersAPI from './services/players'

const rootNode = document.getElementById('root')

const observableState = observableStateFactory()

const renderPage = renderPageFactory(observableState)

const renderApp = stateData => {
  const newChild = renderPage(stateData)

  if (rootNode.firstChild) {
    rootNode.replaceChild(newChild, rootNode.firstChild)
  } else {
    rootNode.appendChild(newChild)
  }
}

observableState.addChangeListener(newState => console.log('State Changed', newState))
observableState.addChangeListener(newState => window.requestAnimationFrame(() => renderApp(newState)))

const init = () => {
  observableState.startLoading()
  Promise.all([teamsAPI.get(), playersAPI.get()]).then(([teams, players]) => {
    observableState.setTeams(teams)
    observableState.setPlayers(players)
    observableState.stopLoading()
  })
}

init()
