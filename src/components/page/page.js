import template from './page.html'
import { htmlToElement } from '../../utils/dom'
import playerList from '../player-list/player-list'
import dashboard from '../dashboard/dashboard'
import spinner from '../spinner/spinner'

export default observableState => {
  const events = {
    onTeamSelectChange: (playerId, teamId) => observableState.changeTeam(playerId, teamId),
    onRandomClick: () => observableState.random(),
    onClearClick: () => observableState.clear()
  }

  return newState => {
    if (newState.loadingCounter) {
      return spinner()
    }

    const element = htmlToElement(template)

    element.querySelector('[role=btn-random]').addEventListener('click', events.onRandomClick)
    element.querySelector('[role=btn-clear]').addEventListener('click', events.onClearClick)

    const playerListElement = element.querySelector('player-list')

    playerListElement.appendChild(playerList(newState, {
      onTeamSelect: events.onTeamSelectChange
    }))

    const dashboardElement = element.querySelector('dashboard')
    dashboardElement.appendChild(dashboard(newState))

    return element
  }
}
