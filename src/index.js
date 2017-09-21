import state from './model/state'
import page from './components/page/page'

const rootNode = document.getElementById('root')

const renderPage = page(state)

const print = data => {
  const newChild = renderPage(data)

  if (rootNode.firstChild) {
    rootNode.replaceChild(newChild, rootNode.firstChild)
  } else {
    rootNode.appendChild(newChild)
  }
}

state.addChangeListener(data => console.log('State Changed', data))
state.addChangeListener(data => window.requestAnimationFrame(() => print(data)))
