import tableTemplate from './table.html'
import rowTemplate from './row.html'
import teamSelection from '../team-selection/team-selection'

import { htmlToElement } from '../../utils/dom'

const renderRow = (player, teams, onTeamSelect) => {
  const row = htmlToElement(rowTemplate)

  row.querySelector('[role=row-name]').innerText = player.name
  row.querySelector('[role=row-email]').innerText = player.email

  const teamSelectionElement = teamSelection(player.team, teams, teamId => onTeamSelect(player.id, teamId))

  row.querySelector('team-selection').appendChild(teamSelectionElement)

  return row
}

export default (newState = {}, events = {}) => {
  const table = htmlToElement(tableTemplate)

  const tBody = table.querySelector('tbody')

  const { players = [], teams = [] } = newState

  players.forEach(player => {
    tBody.appendChild(renderRow(player, teams, events.onTeamSelect))
  })

  return table
}
