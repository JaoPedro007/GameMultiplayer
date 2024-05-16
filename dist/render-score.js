export default function renderScore(score, game, requestAnimationFrame, currentPlayerId) {
  const playerScores = document.createElement('ul');
  const title = document.createElement('h1');
  title.textContent = `Players Score`;
  title.style.textAlign = 'center';
  const players = game.state.players;
  for (const playerId in players) {
    const player = players[playerId];
    const scoreElement = document.createElement('li');
    scoreElement.textContent = `Player ${playerId}: ${player.score ? player.score : 0}`;
    scoreElement.style.marginBottom = '5px';
    playerScores.appendChild(scoreElement);
    if (playerId === currentPlayerId) {
      scoreElement.style.color = 'orange';
    }
  }
  score.innerHTML = '';
  score.appendChild(title);
  score.appendChild(playerScores);
  requestAnimationFrame(() => {
    renderScore(score, game, requestAnimationFrame, currentPlayerId);
  });
}