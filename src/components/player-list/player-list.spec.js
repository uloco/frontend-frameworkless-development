import renderPlayerList from './player-list'

const PLAYERS = [
  {
    'picture': 'http://placehold.it/32x32',
    'name': 'Cox Battle',
    'gender': 'male',
    'age': 21,
    'id': 0,
    'team': false,
    'email': 'coxbattle@geekfarm.com'
  },
  {
    'picture': 'http://placehold.it/32x32',
    'name': 'Sheri Roberson',
    'gender': 'female',
    'age': 26,
    'id': 1,
    'team': false,
    'email': 'sheriroberson@geekfarm.com'
  }
]

describe('player-list', () => {
  test('it not should render rows when no players are provided', () => {
    const playerList = renderPlayerList()
    const rows = playerList.querySelectorAll('tbody tr')
    expect(rows.length).toBe(0)
  })

  test('it should render a row for each player', () => {
    const playerList = renderPlayerList({players: PLAYERS})
    const rows = playerList.querySelectorAll('tbody tr')
    expect(rows.length).toBe(PLAYERS.length)
  })
})
