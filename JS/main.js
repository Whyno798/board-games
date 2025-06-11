import games from 'JS/games-data.js';

function renderGames(filteredGames) {
    const container = document.getElementById('games-container');
    container.innerHTML = '';

    filteredGames.forEach(game => {
        const gameHTML = `
            <article class="game-card" data-id="${game.id}">
                <img src="${game.image}" alt="${game.title}" loading="lazy">
                <h3>${game.title}>/h3>
                <div class="game-meta">
                    <span> ${game.players}</span>
                    <span> ${game.time}</span>
                    <span> ${''.repeat(game.complexity)}</span>
                </div>
                <div class="game-tags">${game.tags.map(t => `#${t}`).join(' ')}</div>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', gameHTML);
    });

    document.getElementById('total-games').textContent = filteredGames.length;
}

document.addEventListener('DOMContentLoaded', () => {
    renderGames(games);
});