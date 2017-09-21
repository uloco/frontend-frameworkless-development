import template from './page.html'
import teams from '../../model/teams'
import players from '../../model/players'
import { htmlToElement } from '../../dom-utils'
import playerList from '../player-list/player-list'
import dashboard from '../dashboard/dashboard'
import spinner from '../spinner/spinner'

export default state => {
  state.startLoading()
  Promise.all([teams.get(), players.get()]).then(([teams, players]) => {
    state.setTeams(teams)
    state.setPlayers(players)
    state.stopLoading()
  })

  const onTeamSelect = (playerId, teamId) => state.changeTeam(playerId, teamId)

  return data => {
    if (data.loadingCounter) {
      return spinner()
    }

    const element = htmlToElement(template)

    element.querySelector('[role=btn-random]').addEventListener('click', state.random)
    element.querySelector('[role=btn-clear]').addEventListener('click', state.clear)

    const playerListElement = element.querySelector('player-list')
    playerListElement.appendChild(playerList(data, {onTeamSelect}))

    const dashboardElement = element.querySelector('dashboard')
    dashboardElement.appendChild(dashboard(data))

    return element
  }
}
