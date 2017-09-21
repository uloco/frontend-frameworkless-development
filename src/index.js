import stateFactory from './model/state'
import renderPageFactory from './components/page/page'

const rootNode = document.getElementById('root')

const state = stateFactory()

const renderPage = renderPageFactory(state)

const print = newState => {
  const newChild = renderPage(newState)

  if (rootNode.firstChild) {
    rootNode.replaceChild(newChild, rootNode.firstChild)
  } else {
    rootNode.appendChild(newChild)
  }
}

state.addChangeListener(newState => console.log('State Changed', newState))
state.addChangeListener(newState => window.requestAnimationFrame(() => print(newState)))
