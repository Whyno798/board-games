const filterByPlayers = (gamesList, selectedPlayers) => {
    if (!selectedPlayers || selectedPlayers.length === 0) return gamesList;

    return gamesList.filter(game => {
        const [min, max] = game.players.split('-').map(Number);
        return selectedPlayers.some(playerCount => {
            const count = parseInt(playerCount);
            return count >= min && count <= max;
        });
    });
};

const filterByTime = (gamesList, selectedTimes) => {
    if (!selectedTimes || selectedTimes.length === 0) return gamesList;

    return gamesList.filter(game => {
        const timeStr = game.time;

        const numbers = timeStr.match(/\d+/g) || [];

        const times = numbers.map(Number).sort((a, b) => a - b);

        const maxGameTime = times.length > 0 ? times[times.length - 1] : 0;

        return selectedTimes.some(time => {
            const maxTime = parseInt(time);
            if (time === "30") {
                return maxGameTime <= 30;
            } else if (time === "60") {
                return maxGameTime > 30 && maxGameTime <= 60;
            } else if (time === "90") {
                return maxGameTime > 60 && maxGameTime <= 90;
            } else if (time === "120") {
                return maxGameTime > 90;
            }
            return false;
        });
    });
};

const filterByComplexity = (gamesList, selectedComplexities) => {
    if (!selectedComplexities || selectedComplexities.length === 0) return gamesList;
    return gamesList.filter(game => selectedComplexities.includes(game.complexity.toString()));
};

const filterByType = (gamesList, selectedTypes) => {
    if (!selectedTypes || selectedTypes.length === 0) return gamesList;

    return gamesList.filter(game => {
        return game.type.some(type =>
            selectedTypes.some(selectedType =>
                type.toLowerCase().includes(selectedType.toLowerCase())
            ));
    });
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
    result = filterByPlayers(result, filters.playerCounts);
    result = filterByTime(result, filters.maxTimes);
    result = filterByComplexity(result, filters.complexities);
    result = filterByType(result, filters.types);
    return result;
};

export function initFilters(onFilterChange) {
    const searchInput = document.getElementById('search-input');
    const resetBtn = document.getElementById('reset-filters');

    const getCurrentFilters = () => {
        const playerCheckboxes = document.querySelectorAll('input[name="players"]:checked');
        const timeCheckboxes = document.querySelectorAll('input[name="time"]:checked');
        const complexityCheckboxes = document.querySelectorAll('input[name="complexity"]:checked');
        const typeCheckboxes = document.querySelectorAll('input[name="type"]:checked');

        return {
            searchTerm: searchInput.value,
            playerCounts: Array.from(playerCheckboxes).map(cb => cb.value),
            maxTimes: Array.from(timeCheckboxes).map(cb => cb.value),
            complexities: Array.from(complexityCheckboxes).map(cb => cb.value),
            types: Array.from(typeCheckboxes).map(cb => cb.value),
        };
    };

    const notify = () => onFilterChange(getCurrentFilters());

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', notify);
    });

    searchInput.addEventListener('input', notify);

    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        notify();
    });
}
