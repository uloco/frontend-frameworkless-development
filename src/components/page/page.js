import template from './page.html'
import teams from '../../model/teams'
import players from '../../model/players'
import { htmlToElement } from '../../dom-utils'
import playerList from '../player-list/player-list'

export default state => {
  Promise.all([teams.get(), players.get()]).then(([teams, players]) => {
    state.setTeams(teams)
    state.setPlayers(players)
  })

  const onTeamSelect = (playerId, teamId) => state.changeTeam(playerId, teamId)

  return data => {
    const element = htmlToElement(template)
    const playerListElement = element.querySelector('player-list')
    playerListElement.appendChild(playerList(data, {onTeamSelect}))
    return element
  }
}