import template from './page.html'
import teams from '../../model/teams'
import players from '../../model/players'
import { htmlToElement } from '../../dom-utils'

const render = data => {
  const element = htmlToElement(template)
  element.querySelector('h2').addEventListener('click', console.log)
  return element
}

const init = state => {
  Promise.all([teams.get(), players.get()]).then(([teams, players]) => {
    state.setTeams(teams)
    state.setPlayers(players)
  })
}

export default {
  init,
  render
}
