import { htmlToElement } from '../../utils/dom'

const teamToDiv = (team, players, maxPlayersPerTeam) => {
  const playersPerTeam = players.filter(player => player.team === team.id).length
  const className = playersPerTeam > maxPlayersPerTeam ? 'text-error' : ''

  return `<div class=${className}>
            ${team.name} ${playersPerTeam}/${maxPlayersPerTeam}
          </div>`
}

export default newState => {
  const { teams, players, maxPlayersPerTeam } = newState

  const teamHtmlContent = teams
                            .map(team => teamToDiv(team, players, maxPlayersPerTeam))
                            .join('')

  return htmlToElement(`<div class="aligner-space-around text-gray">${teamHtmlContent}</div>`)
}
