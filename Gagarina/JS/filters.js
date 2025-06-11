import games from 'JS\games-data.js';

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

document/addEventListener('DOMContentLoaded', renderFilters);