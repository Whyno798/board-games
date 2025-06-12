import games from './games-data.js';

const filters = {
    players: '',
    time: '',
    complexity: '',
    search: '',
};

function renderFilters() {
    const filtersHTML= `
    <section class="filter-section">
        <h3>Количество игроков</h3>
        <select id="players-filter">
            <option value="">Любое</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
        </select>
    </section>

    <section class="filter-section">
        <h3>Время игры</h3>
        <select id="time-filter">
            <option value="">Любое</option>
            <option value="30">До 30 мин</option>
            <option value="60">30-60 мин</option>
            <option value="90">60-90 мин</option>
            <option value="120">90+ мин</option>
        </select>
    </section>
    `; //выше добавляй ещё фильтры

    document.querySelector('.filters').innerHTML = filtersHTML;
}

const filterByPlayers = (gamesList, playerCount) => {
    if (!playerCount) return gamesList;
    return gamesList.filter(game => {
        const [min, max] = game.players.split('-').map(Number);
        return parseInt(playerCount) >= min && parseInt(playerCount) <= max;
    });
};

const filterByTime = (gamesList, time) => {
    if (!time) return gamesList;
    return gamesList.filter(game => {
        const [minTime] = game.time.match(/\d+/g) || [0];
        return parseInt(minTime) <= parseInt(time);
    });
};

const filterByComplexity = (gamesList, complexity) => {
    if(!complexity) return gamesList;
    return gamesList.filter(game => game.complexity == complexity);
};

const searchGames = (gamesList, term) => {
    if(!term) return gamesList;
    return gamesList.filter(game =>
        game.title.toLowerCase().includes(term.toLowerCase())
    );
};

export function applyFilters(games, filters) {
    let result = [...games];
    result = searchGames(result, filters.searchTerm);
    result = filterByPlayers(result, filters.playerCount);
    result = filterByTime(result, filters.maxTime);
    result = filterByComplexity(result, filters.complexity);
    return result;
};

export function initFilters(onFilterChange) {
    const searchInput = document.getElementById('search-input');
    const playersFilter = document.getElementById('players-filter');
    const timeFilter = document.getElementById('time-filter');
    const complexityFilter = document.getElementById('complexitu-filter');
    const resetBtn = document.getElementById('reset-filters');

    const getCurrentFilters = () => ({
        searchTerm: searchInput.value,
        playerCount: playersFilter.value,
        maxTime: timeFilter.value,
        complexity: complexityFilter.value,
    });

    const notify = () => onFilterChange(getCurrentFilters());

    searchInput.addEventListener('input', notify);
    playersFilter.addEventListener('change', notify);
    timeFilter.addEventListener('change', notify);
    complexityFilter.addEventListener('change', notify);

    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        playersFilter.value = '';
        timeFilter.value = '';
        complexityFilter.value = '';
        notify();
    });
}
