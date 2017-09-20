import tableTemplate from './table.html'
import rowTemplate from './row.html'

import { htmlToElement } from '../../dom-utils'

const renderRow = player => {
  const row = htmlToElement(rowTemplate)

  row.querySelector('[role=row-name]').innerText = player.name
  row.querySelector('[role=row-email]').innerText = player.email

  return row
}

const render = data => {
  const table = htmlToElement(tableTemplate)

  const tBody = table.querySelector('tbody')

  data.players.forEach(player => tBody.appendChild(renderRow(player)))

  return table
}

export default {
  render
}
