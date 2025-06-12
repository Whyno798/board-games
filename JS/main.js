import { initFilters, applyFilters } from './filters.js';
import games from './games-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('games-container');

    function renderGames(gamesToRender) {
        container.innerHTML = gamesToRender.map(game => `
            <div class="game-card" data-id="${game.id}">
                <img src="${game.image}" alt="${game.title}" loading="lazy">
                <div class="game-info">
                    <h3>${game.title}</h3>
                    <div class="game-meta">
                        <span><i class="fas fa-users"></i> ${game.players}</span>
                        <span><i class="fas fa-clock"></i> ${game.time}</span>
                        <span>${game.complexity}</span>
                    </div>
                </div>
            </div>
            `).join('');
    }

    initFilters(filters => {
        renderGames(applyFilters(games, filters));
    });

    renderGames(games);
});

window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});