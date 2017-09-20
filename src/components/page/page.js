import template from './page.html'
import teams from '../../model/teams'
import { htmlToElement } from '../../dom-utils'

const render = data => {
  const element = htmlToElement(template)
  element.querySelector('h2').addEventListener('click', console.log)
  return element
}

const init = state => {
  teams.get().then(state.setTeams)
}

export default {
  init,
  render
}
