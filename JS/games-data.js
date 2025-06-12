const games = [
    {
        id: 1,
        title: "Photosynthesis",
        players: "2-4",
        time: "45-60 мин",
        complexity: 2,
        type: ["Стратегия"],
        tags: ["Семейная"],
        image: "./imagines/Photosynthesis-1000x416-wm.jpg"
    },
    {
        id: 2,
        title: "Серп",
        players: "1-7",
        time: "90-180 мин",
        complexity: 3,
        type: ["Стратегия"],
        tags: ["Хардкор"],
        image: "imagines/scythe_box-1000x416-wm.jpg"
    },
    {
        id: 3,
        title: "Серп: захватчики из далеких земель",
        players: "2-7",
        time: "90-180 мин",
        complexity: 3,
        type: ["Стратегия"],
        tags: ["Дополнение, Хардкор"],
        image: "imagines/Scythe-Invaders-from-afar-1-1000x416-wm.jpg"
    },
    {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 4,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines/Voina_Kolca-1000x416-wm.jpg"
    },
    {
        id: 5,
        title: "Феод",
        players: "2-5",
        time: "180+ мин",
        complexity: 5,
        type: ["Стратегия, Евро"],
        tags: ["Хардкор"],
        image: "imagines/Feudum-1000x416-wm.jpg"
    },
    {
        id: 6,
        title: "Менеджер",
        players: "2-6",
        time: "60-90 мин",
        complexity: 2,
        type: ["Экономика"],
        tags: ["Простое, Семейное"],
        image: "imagines/x3821_nastolnaya-igra-menedzher.jpg"
    },
    {
        id: 7,
        title: "Остров кошек",
        players: "1-4",
        time: "60-90 мин",
        complexity: 2,
        type: ["Стратегия, Логика"],
        tags: ["Простое, Семейное"],
        image: "imagines/Ostrov_Koshek-1000x416-wm.jpg"
    },

    {
        id: 8,
        title: "Нефариус",
        players: "2-6",
        time: "20-40 мин",
        complexity: 2,
        type: ["Стратегия"],
        tags: ["Простое, Семейное"],
        image: "imagines/Nefarius-1980x1980-wm.jpg"
    }, {
        id: 9,
        title: "500 злобных карт",
        players: "3-100",
        time: "15+ мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["Простое"],
        image: "imagines/zlobnye-karty.jpg"
    }, {
        id: 10,
        title: "Ужастик: Тайна особняка Фостеров",
        players: "4-5",
        time: "60-120 мин",
        complexity: 2,
        type: ["Детектив, Хоррор"],
        tags: ["С мобильным приложением. Кооператив"],
        image: "imagines/Ujastik-1000x416-wm.jpg"
    }, {
        id: 11,
        title: "Твистер",
        players: "2+",
        time: "15+ мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["Интерактивная"],
        image: "imagines/Twister-1000x416-wm.jpg"
    }, {
        id: 12,
        title: "Каркассон: Охотники и собиратели",
        players: "2-5",
        time: "40+ мин",
        complexity: 2,
        type: ["Стратегия"],
        tags: ["Семейное"],
        image: "imagines/Karkasson_Ohotnik_00-1000x416-wm.jpg"
    }, {
        id: 13,
        title: "Бункер",
        players: "4-16",
        time: "30-60 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["18+"],
        image: "imagines/bunker-31c-00-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Место преступления: Прекрасная эпоха",
        players: "1-4",
        time: "60-90 мин",
        complexity: 2,
        type: ["Детектив"],
        tags: ["С мобильным приложением"],
        image: "imagines/Mesto_prestuplenia_Prekrasnaya_epokha_01-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines/Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines/Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines/Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines/Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines/Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    }, {
        id: 4,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 2,
        type: ["Стратегия, Дуэль"],
        tags: ["Хардкор"],
        image: "imagines\Voina_Kolca-1000x416-wm.jpg"
    },
    //докидывай сюда игр
];

export default games;