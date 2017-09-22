import renderTeamSelection from './team-selection'

const TEAMS = [
  {
    'id': 0,
    'name': 'Red'
  },
  {
    'id': 1,
    'name': 'Green'
  },
  {
    'id': 2,
    'name': 'Blue'
  },
  {
    'id': 3,
    'name': 'Yellow'
  }
]

describe('team-selection', () => {
  test('it should print a single option when no team is provided', () => {
    const teamSelection = renderTeamSelection()
    const options = teamSelection.querySelectorAll('option')
    expect(options.length).toBe(1)
  })

  test('it should print options for every team', () => {
    const teamSelection = renderTeamSelection(null, TEAMS)
    const options = teamSelection.querySelectorAll('option')
    expect(options.length).toBe(TEAMS.length + 1)
  })

  test('it manage team selection', () => {
    const teamSelection = renderTeamSelection(TEAMS[1].id, TEAMS)

    const selectedOption = teamSelection.querySelector(`option[value="${TEAMS[1].id}"]`)
    expect(selectedOption.selected).toBeTruthy()

    const unselectedOption = teamSelection.querySelector(`option[value="${TEAMS[0].id}"]`)
    expect(unselectedOption.selected).toBeFalsy()
  })
})
