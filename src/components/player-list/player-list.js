import tableTemplate from './table.html'
import rowTemplate from './row.html'
import teamSelection from '../team-selection/team-selection'

import { htmlToElement } from '../../dom-utils'

const renderRow = (player, teams) => {
  const row = htmlToElement(rowTemplate)

  row.querySelector('[role=row-name]').innerText = player.name
  row.querySelector('[role=row-email]').innerText = player.email

  const teamSelectionElement = teamSelection.render(teams)

  row.querySelector('team-selection').appendChild(teamSelectionElement)

  return row
}

const render = data => {
  const table = htmlToElement(tableTemplate)

  const tBody = table.querySelector('tbody')

  const { players, teams } = data

  data.players.forEach(player => {
    tBody.appendChild(renderRow(player, teams))
  })

  return table
}

export default {
  render
}
