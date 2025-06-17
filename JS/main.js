import { initFilters, applyFilters } from './filters.js';
import games from './games-data.js';

const complexityText = {
    1: 'Очень простая',
    2: 'Простая',
    3: 'Средняя',
    4: 'Сложная',
    5: 'Очень сложная',
};

let sortDirection = 1

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

        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', () => {
                const gameId = parseInt(card.getAttribute('data-id'));
                const game = games.find(g => g.id === gameId);
                if (game) {
                    showGameModal(game);
                }
            });
        });
    }

    function showGameModal(game) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" aria-label="Закрыть">&times;</button>
            <div class="modal-header">
                <h2>${game.title}</h2>
            </div>
            <div class="modal-body">
                <img src="${game.image}" alt="${game.title}" class="modal-image">
                <div class="modal-info">
                    <p><strong>Игроки:</strong> ${game.players}</p>
                    <p><strong>Время игры:</strong> ${game.time}</p>
                    <p><strong>Сложность:</strong> ${complexityText[game.complexity] || game.complexity}</p>
                    <p><strong>Тип:</strong> ${game.type.join(', ')}</p>
                    ${game.tags && game.tags.length > 0 ? `<p><strong>Теги:</strong> ${game.tags.join(', ')}</p>` : ''}
                </div>
            </div>
        </div>
    `;
        document.body.appendChild(modal);
        modal.style.display = 'block';

        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.style.display = 'none';
            setTimeout(() => modal.remove(), 300);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                setTimeout(() => modal.remove(), 300);
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
                setTimeout(() => modal.remove(), 300);
            }
        });
    }


    initFilters((filters) => {
        const filteredGames = applyFilters(games, filters);
        renderGames(filteredGames);
    });


    renderGames(games);

    function sortGames(gamesList, direction) {
        return [...gamesList].sort((a, b) => {
            return direction * a.title.localeCompare(b.title, 'ru');
        });
    }

    document.getElementById('sort-alphabet').addEventListener('click', () => {
        sortDirection *= -1;
        const currentFilters = getCurrentFilters();
        const filteredGames = applyFilters(games, currentFilters);
        const sortedGames = sortGames(filteredGames, sortDirection);
        renderGames(sortedGames);


        const sortButton = document.getElementById('sort-alphabet');
        sortButton.innerHTML = sortDirection === 1
            ? '<i class="fas fa-sort-alpha-down"></i> Сортировать А-Я'
            : '<i class="fas fa-sort-alpha-up"></i> Сортировать Я-А';
    });

    document.getElementById('random-game').addEventListener('click', () => {
        const currentFilters = getCurrentFilters();
        const filteredGames = applyFilters(games, currentFilters);

        if (filteredGames.length === 0) {
            alert('Нет игр, соответствующих выбранным фильтрам!');
            return;
        }

        const randomGame = filteredGames[Math.floor(Math.random() * filteredGames.length)];
        showGameModal(randomGame);

        const gameCard = document.querySelector(`.game-card[data-id="${randomGame.id}"]`);
        if (gameCard) {
            gameCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

            gameCard.classList.add('highlight');
            setTimeout(() => {
                gameCard.classList.remove('highlight');
            }, 2000);
        }
    });


    function getCurrentFilters() {
        return {
            searchTerm: document.getElementById('search-input').value,
            playerCounts: Array.from(document.querySelectorAll('input[name="players"]:checked')).map(cb => cb.value),
            maxTimes: Array.from(document.querySelectorAll('input[name="time"]:checked')).map(cb => cb.value),
            complexities: Array.from(document.querySelectorAll('input[name="complexity"]:checked')).map(cb => cb.value),
            types: Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value),
        };
    }

    window.addEventListener('load', () => {
        document.getElementById('loader').style.display = 'none';
    });

    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.parentElement;
            accordion.classList.toggle('active');
        });
    });

    const mobileFiltersToggle = document.getElementById('mobile-filters-toggle');
    const filters = document.querySelector('.filters');

    if (mobileFiltersToggle && filters) {
        mobileFiltersToggle.addEventListener('click', () => {
            filters.classList.toggle('visible');
            document.body.style.overflow = filters.classList.contains('visible') ? 'hidden' : '';
        });
    }
});