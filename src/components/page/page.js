import template from './page.html'
import { htmlToElement } from '../../utils/dom'
import renderPlayerList from '../player-list/player-list'
import renderDashboard from '../dashboard/dashboard'
import renderSpinner from '../spinner/spinner'

export default observableState => {
  const events = {
    onTeamSelectChange: (playerId, teamId) => observableState.changeTeam(playerId, teamId),
    onRandomClick: () => observableState.random(),
    onClearClick: () => observableState.clear()
  }

  const renderPage = (stateData) => {
    if (stateData.loadingCounter) {
      return renderSpinner()
    }

    const element = htmlToElement(template)

    element
      .querySelector('player-list')
      .appendChild(renderPlayerList(stateData, {
        onTeamSelect: events.onTeamSelectChange
      }))

    element
      .querySelector('dashboard')
      .appendChild(renderDashboard(stateData))

    element
      .querySelector('[role=btn-random]')
      .addEventListener('click', events.onRandomClick)

    element
      .querySelector('[role=btn-clear]')
      .addEventListener('click', events.onClearClick)

    return element
  }

  return renderPage
}
