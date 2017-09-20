import state from './model/state'
import page from './components/page/page'

const rootNode = document.getElementById('root')

const print = data => {
  const newChild = page.render(data)

  if (rootNode.firstChild) {
    rootNode.replaceChild(newChild, rootNode.firstChild)
  } else {
    rootNode.appendChild(newChild)
  }
}

state.addChangeListener(console.log)
state.addChangeListener(data => window.requestAnimationFrame(() => print(data)))

page.init(state)
