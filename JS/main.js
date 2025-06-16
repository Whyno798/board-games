import { initFilters, applyFilters } from './filters.js';
import games from './games-data.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('games-container');

    function updateGamesCount(count) {
        const countElement = document.getElementById('games-count');
        if (countElement) {
            countElement.textContent = count;
        }
    }

    function renderGames(gamesToRender) {
        updateGamesCount(gamesToRender.length);

        if (gamesToRender.length === 0) {
            container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>Игры не найдены. Измените фильтры.</p>
            </div>
            `;
            return;
        }

        const complexityText = {
            1: 'Очень простая',
            2: 'Простая',
            3: 'Средняя',
            4: 'Сложная',
            5: 'Очень сложная',
        };

        container.innerHTML = gamesToRender.map(game => `
            <div class="game-card" data-id="${game.id}">
                <img src="${game.image}" alt="${game.title}" class="game-card_image" loading="lazy">
                <div class="game-card_content">
                    <h3 class="game-card_title">${game.title}</h3>
                    <div class="game-card_meta">
                        <span class="game-card_meta-item"><i class="fas fa-users"></i> ${game.players}</span>
                        <span class="game-card_meta-item"><i class="fas fa-clock"></i> ${game.time}</span>
                        <span class="game-card_meta-item"><i class="fas fa-brain"></i> ${complexityText[game.complexity] || game.complexity}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    initFilters(filters => {
        const filteredGames = applyFilters(games, filters);
        renderGames(filteredGames);
    });

    renderGames(games);
});

window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});