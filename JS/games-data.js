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
    }, 
    {
        id: 9,
        title: "500 злобных карт",
        players: "3-100",
        time: "15+ мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["Простое"],
        image: "imagines/zlobnye-karty.jpg"
    }, 
    {
        id: 10,
        title: "Ужастик: Тайна особняка Фостеров",
        players: "4-5",
        time: "60-120 мин",
        complexity: 2,
        type: ["Детектив, Хоррор"],
        tags: ["С мобильным приложением. Кооператив"],
        image: "imagines/Ujastik-1000x416-wm.jpg"
    }, 
    {
        id: 11,
        title: "Твистер",
        players: "2+",
        time: "15+ мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["Интерактивная"],
        image: "imagines/Twister-1000x416-wm.jpg"
    }, 
    {
        id: 12,
        title: "Каркассон: Охотники и собиратели",
        players: "2-5",
        time: "40+ мин",
        complexity: 2,
        type: ["Стратегия"],
        tags: ["Семейное"],
        image: "imagines/Karkasson_Ohotnik_00-1000x416-wm.jpg"
    }, 
    {
        id: 13,
        title: "Бункер",
        players: "4-16",
        time: "30-60 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["18+"],
        image: "imagines/bunker-31c-00-1000x416-wm.jpg"
    }, 
    {
        id: 14,
        title: "Место преступления: Прекрасная эпоха",
        players: "1-4",
        time: "60-90 мин",
        complexity: 2,
        type: ["Детектив"],
        tags: ["С мобильным приложением"],
        image: "imagines/Mesto_prestuplenia_Prekrasnaya_epokha_01-1000x416-wm.jpg"
    },
    {
        id: 15,
        title: "Шерлок Холмс. Детектив-консультант: Убийства на Темзе и другие расследования",
        players: "1-8",
        time: "90+ мин",
        complexity: 2,
        type: ["Детектив, Квест"],
        tags: ["С мобильным приложением"],
        image: "imagines/Sherlock_Holms-1000x416-wm.jpg"
    }, {
        id: 16,
        title: "Войны Чёрной Розы: Возрождение",
        players: "1-4",
        time: "90+ мин",
        complexity: 3,
        type: ["Стратегия"],
        tags: ["С мобильным приложением"],
        image: "imagines/vcr-vozrozhdenie-00-1000x416-wm.jpg"
    },{
        id: 17,
        title: "Гвинт",
        players: "2",
        time: "30 мин",
        complexity: 2,
        type: ["Карточная, тактическая"],
        tags: ["С мобильным приложением"],
        image: "imagines/gwent.webp"
    },{
        id: 18,
        title: "Res arcana",
        players: "2-4",
        time: "30-60 мин",
        complexity: 2,
        type: ["Стратегия, карточная"],
        tags: ["С мобильным приложением"],
        image: "imagines/Res_Arcana-1000x416-wm.jpg"
    },{
        id: 19,
        title: "Таверна Красный Дракон",
        players: "2-4",
        time: "30-60 мин",
        complexity: 2,
        type: ["Карточная, для вечеринок"],
        tags: ["С мобильным приложением"],
        image: "imagines/Taverna_Krasnyj_Drakon00-1000x416-wm.jpg"
    },{
        id: 20,
        title: "Улей",
        players: "2",
        time: "10-30 мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: ["С мобильным приложением"],
        image: "imagines/ulej00-1000x416-wm.jpg"
    },{
        id: 21,
        title: "Шляпа. Салонная игра",
        players: "3-16",
        time: "40-90 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["С мобильным приложением"],
        image: "imagines/Shlyapa-1000x416-wm.jpg"
    },{
        id: 22,
        title: "Среди Знати",
        players: "3-5",
        time: "60-120 мин",
        complexity: 2,
        type: ["Стратегия"],
        tags: ["С мобильным приложением"],
        image: "imagines/sredi-znaty.jpg"
    },{
        id: 23,
        title: "Судный день",
        players: "4-16",
        time: "15-90 мин",
        complexity: 2,
        type: ["Мафия"],
        tags: ["С мобильным приложением"],
        image: "imagines/Sudniy_Den-1000x416-wm.jpg"
    },{
        id: 24,
        title: "Рес Аркана: Свет и Тьма",
        players: "2-5",
        time: "30-60 мин",
        complexity: 2,
        type: ["Стратегия, дополнение"],
        tags: ["С мобильным приложением"],
        image: "imagines/Res_Arcana_Svet_i_Tma-1000x416-wm.jpg"
    },{
        id: 25,
        title: "Дженга 54",
        players: "2+",
        time: "30 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["С мобильным приложением"],
        image: "imagines/jenga.jpg"
    },{
        id: 26,
        title: "Шахматы",
        players: "2",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль, стратегия"],
        tags: ["С мобильным приложением"],
        image: "imagines/Opening_chess_position_from_black_side.jpg"
    },{
        id: 27,
        title: "Домино",
        players: "2-4",
        time: "10-30 мин",
        complexity: 1,
        type: ["Стратегия"],
        tags: ["С мобильным приложением"],
        image: "imagines/karpovo-di-news-208_1651837780.jpg"
    },{
        id: 28,
        title: "Властелин колец: Странствия в Средиземье",
        players: "1-5",
        time: "60+ мин",
        complexity: 2,
        type: ["Сюжетное"],
        tags: ["С мобильным приложением"],
        image: "imagines/LotR_journey-in-middle-earth-1000x416-wm.jpg"
    },{
        id: 29,
        title: "Властелин колец. Странствия в Средиземье: Тёмные тропы",
        players: "1-5",
        time: "60+ мин",
        complexity: 2,
        type: ["Сюжентное, дополнение"],
        tags: ["С мобильным приложением"],
        image: "imagines/Mesto_prestuplenia_Prekrasnaya_epokha_01-1000x416-wm.jpg"
    },{
        id: 30,
        title: "Война Кольца: Карточная игра",
        players: "2-4",
        time: "90+ мин",
        complexity: 3,
        type: ["Стратегия, дуэль"],
        tags: [""],
        image: "imagines/voyna_koltsa_kartochnaya_00-1000x416-wm.jpg"
    },
    {
        id: 31,
        title: "Орлеан",
        players: "2-4",
        time: "60-90 мин",
        complexity: 2,
        type: ["Стратегия, евро"],
        tags: [""],
        image: "imagines/Orlean00-1000x416-wm.jpg"
    },
    {
        id: 32,
        title: "Пандемия",
        players: "2-4",
        time: "40+ мин",
        complexity: 2,
        type: ["Стратегия, кооператив"],
        tags: [""],
        image: "imagines/pandemia-2024-00-1000x416-wm.jpg"
    },
    {
        id: 33,
        title: "Роскошь",
        players: "2-4",
        time: "30-45 мин",
        complexity: 2,
        type: ["Стратегия, экономика"],
        tags: [""],
        image: "imagines/roskosh-00-1000x416-wm.jpg"
    },
    {
        id: 34,
        title: "Зараза",
        players: "2-12",
        time: "60 мин",
        complexity: 2,
        type: [""],
        tags: [""],
        image: "imagines/zaraza.jpg"
    },
    {
        id: 35,
        title: "Quoridor (Коридор)",
        players: "2-4",
        time: "10-20 мин",
        complexity: 1,
        type: ["Логика"],
        tags: [""],
        image: "imagines/Koridor-1000x416-wm.jpg"
    },
    {
        id: 36,
        title: "Quarto",
        players: "2",
        time: "10-20 мин",
        complexity: 1,
        type: ["дуэль"],
        tags: [""],
        image: "imagines/Quarto-1000x416-wm.jpg"
    },
    {
        id: 37,
        title: "Обломи меня",
        players: "4-8",
        time: "20+ мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: [""],
        image: "imagines/Oblomi_Menya-1000x416-wm.jpg"
    },
    {
        id: 38,
        title: "Маскарад",
        players: "2-13",
        time: "30+ мин",
        complexity: 2,
        type: ["Для вечеринок"],
        tags: [""],
        image: "imagines/maskarad.jpg"
    },
    {
        id: 39,
        title: "Танграм",
        players: "1-4",
        time: "30 мин",
        complexity: 1,
        type: ["Головоломки"],
        tags: [""],
        image: "imagines/tangram.jpg"
    },
    {
        id: 40,
        title: "Dos",
        players: "2-4",
        time: "20+ мин",
        complexity: 2,
        type: ["Карточная"],
        tags: [""],
        image: "imagines/Dos-1000x416-wm.jpg"
    },
    {
        id: 41,
        title: "Uno",
        players: "2-10",
        time: "15+ мин",
        complexity: 1,
        type: ["Карточная"],
        tags: [""],
        image: "imagines/Uno-1000x416-wm.jpg"
    },
    {
        id: 42,
        title: "КОЗЛОМафия",
        players: "3+",
        time: "30+ мин",
        complexity: 1,
        type: ["Мафия"],
        tags: [""],
        image: "imagines/kozlomafia.jpg"
    },
    {
        id: 43,
        title: "Пей бодрей",
        players: "2+",
        time: "15-30 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: [""],
        image: "imagines/peybodrey.webp"
    },
    {
        id: 44,
        title: "Доббль",
        players: "2-8",
        time: "20-30 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: [""],
        image: "imagines/Doabl_Classic-1000x416-wm.jpg"
    },
    {
        id: 45,
        title: "Эчпочмак",
        players: "2-8",
        time: "20+ мин",
        complexity: 2,
        type: ["Для вечеринок"],
        tags: [""],
        image: "imagines/echpochmak.jpg"
    },
    {
        id: 46,
        title: "Dream Decoder",
        players: "2",
        time: "30 мин",
        complexity: 2,
        type: [""],
        tags: [""],
        image: "imagines/31pmQ9o9FML._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 47,
        title: "Unmatched: Битва Легенд. Том первый",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: [""],
        image: "imagines/UnMatched-1000x416-wm.jpg"
    },
    {
        id: 48,
        title: "Unmatched: Туман над Mостовой",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: [""],
        image: "imagines/Unmatched_Tuman-1000x416-wm.jpg"
    },
    {
        id: 49,
        title: "Unmatched: Удары судьбы",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: [""],
        image: "imagines/um-udari-sudbi-00-1000x416-wm.jpg"
    },
    {
        id: 50,
        title: "Unmatched: Битва Легенд. Том второй",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: [""],
        image: "imagines/unmatched-bitva-legend-tom-vtoroj-00-1000x416-wm.jpg"
    },
    {
        id: 51,
        title: "Unmatched: Красная Шапочка vs. Беовульф",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: [""],
        image: "imagines/shapka_01-1000x416-wm.jpg"
    },
    {
        id: 52,
        title: "Unmatched: Гудини vs. Джинн",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: [""],
        image: "imagines/unmatched-gudini-vs-dzhinn-00-1000x416-wm.jpg"
    },
    {
        id: 53,
        title: "Descent: Сказания тьмы",
        players: "1-4",
        time: "180+ мин",
        complexity: 3,
        type: ["Сюжетная"],
        tags: [""],
        image: "imagines/descent_legends_of_the_dark_00-1000x416-wm.jpg"
    },
    {
        id: 54,
        title: "Орифламма",
        players: "3-5",
        time: "25+ мин",
        complexity: 2,
        type: ["Стртегия, карточная"],
        tags: [""],
        image: "imagines/Oriflamma-1000x416-wm.jpg"
    },

    {
        id: 55,
        title: "За бортом",
        players: "4-8",
        time: "40+ мин",
        complexity: 2,
        type: ["Мафия"],
        tags: [""],
        image: "imagines/Za_Bortom-1000x416-wm.jpg"
    },
    {
        id: 56,
        title: "За бортом! Три дополнения в одной коробке",
        players: "4-8",
        time: "40+ мин",
        complexity: 2,
        type: ["Мафия"],
        tags: [""],
        image: "imagines/Za_Bortom_3-Dopolnenia-1000x416-wm.jpg"
    },
    {
        id: 57,
        title: "Догма",
        players: "3-8",
        time: "15-30 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: [""],
        image: "imagines/dogma-00-1000x416-wm.jpg"
    },
    {
        id: 58,
        title: "Защитники Диких Земель",
        players: "1-4",
        time: "60-120 мин",
        complexity: 3,
        type: ["Стратегия, кооператив"],
        tags: [""],
        image: "imagines/zashhitniki-dz-00-1000x416-wm.jpg"
    },
    {
        id: 59,
        title: "Обитель тьмы",
        players: "1-5",
        time: "50 мин",
        complexity: 2,
        type: ["Хоррор, кооператив"],
        tags: [""],
        image: "imagines/obitel_00-1000x416-wm.jpg"
    },
    {
        id: 60,
        title: "EXIT-Квест: Кладбище тьмы",
        players: "1-4",
        time: "60-120 мин",
        complexity: 2,
        type: ["Хоррор, кооператив"],
        tags: [""],
        image: "imagines/Exit_kladbiche_Tmi-1000x416-wm.jpg"
    },
    {
        id: 61,
        title: "EXIT-Квест: Зловещий особняк",
        players: "1-4",
        time: "60-120 мин",
        complexity: 2,
        type: ["Хоррор, кооператив"],
        tags: [""],
        image: "imagines/Exit_Zlovechiy_Osobnyak-1000x416-wm.jpg"
    },
    {
        id: 62,
        title: "Запретный Остров",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Кооператив, выживание"],
        tags: [""],
        image: "imagines/Zapret_ostr-1000x416-wm.jpg"
    },
    {
        id: 63,
        title: "Лоскутное королевство",
        players: "2-4",
        time: "15 мин",
        complexity: 2,
        type: ["Семейное"],
        tags: [""],
        image: "imagines/Loskutnoe_Korolevstvo-1000x416-wm.jpg"
    },
    {
        id: 64,
        title: "Имаджинариум",
        players: "4-7",
        time: "30-60 мин",
        complexity: 1,
        type: ["Семейное, для вечеринок"],
        tags: [""],
        image: "imagines/DSC_6856-1024x1024-wm.webp"
    },
    {
        id: 65,
        title: "Иниш",
        players: "2-4",
        time: "60-90 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий"],
        tags: [""],
        image: "imagines/Inish-1000x416-wm.jpg"
    },
    {
        id: 63,
        title: "Иниш: Сезоны",
        players: "2-5",
        time: "90+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: [""],
        image: "imagines/Inish_Sezony-1000x416-wm.jpg"
    },


    //докидывай сюда игр
];

export default games;