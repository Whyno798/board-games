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
    if (!complexity) return gamesList;
    return gamesList.filter(game => game.complexity == complexity);
};

const searchGames = (gamesList, term) => {
    if (!term) return gamesList;
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
    const complexityFilter = document.getElementById('complexity-filter');
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
