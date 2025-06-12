import games from './games-data.js';

window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

function renderGames(filteredGames) {
    const container = document.getElementById('games-container');
    container.innerHTML = '';

    filteredGames.forEach(game => {
        const gameHTML = `
            <article class="game-card" data-id="${game.id}">
                <img src="${game.image}" alt="${game.title}" loading="lazy">
                <h3>${game.title}</h3>
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

document.getElementById('search-input');


document.getElementById('players-filter').addEventListener('change', (e) => {
    const players = e.target.value;
    const filtered = players ? game.filter(game => game.players.includes(players)) : games;
    renderGames(filtered);
});

document.getElementById('time-filter').addEventListener('change', (e) => {
    const time = e.target.value;
    const filtered = time ? game.filter(game => game.time.includes(time)) : games;
    renderGames(filtered);
});

document.getElementById('theme-toggle');

document.querySelectorAll('.stars-filter button').forEach(btn => {
    btn.addEventListener('click', () => {
        filterByComplexity(btn.dataset.rating);
    });
});