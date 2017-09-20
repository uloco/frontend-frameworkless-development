import template from './team-selection.html'

import { htmlToElement } from '../../dom-utils'

const render = (teams, onChangeTeam) => {
  const teamSelectionElement = htmlToElement(template)

  const select = teamSelectionElement.querySelector('select')

  select.addEventListener('change', e => onChangeTeam(e.target.value))

  teams.forEach(team => {
    const option = document.createElement('option')
    option.text = team.name
    option.value = team.id

    select.add(option)
  })

  return teamSelectionElement
}

export default {
  render
}
