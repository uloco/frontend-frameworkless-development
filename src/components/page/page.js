import template from './page.html'
import teams from '../../model/teams'

const htmlToElement = html => {
  var template = document.createElement('template')
  template.innerHTML = html
  return template.content.firstChild
}

const render = data => {
  const element = htmlToElement(`<div>${template}<p>${data.teams.length}</p></div>`)
  element.querySelector('h1').addEventListener('click', console.log)
  return element
}

const init = state => {
  teams.get().then(state.setTeams)
}

export default {
  init,
  render
}
