import template from './page.html'
import { htmlToElement } from '../../dom-utils'
import playerList from '../player-list/player-list'
import dashboard from '../dashboard/dashboard'
import spinner from '../spinner/spinner'

export default state => {
  return data => {
    const onTeamSelect = (playerId, teamId) => state.changeTeam(playerId, teamId)

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
