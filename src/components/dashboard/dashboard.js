import { htmlToElement } from '../../dom-utils'

export default data => {
  const { teams, players } = data

  console.log(players)

  const teamHtmlContent = teams
        .map(team => {
          const howManyPlayers = players.filter(player => player.team === team.id).length
          return {
            name: team.name,
            players: howManyPlayers
          }
        })
        .map(team => `<div>${team.name} ${team.players}/5</div>`)
        .join('')

  return htmlToElement(`<div class="aligner-space-around text-gray">${teamHtmlContent}</div>`)
}
