const games = [
    {
        id: 1,
        title: "Photosynthesis",
        players: "2-4",
        time: "45-60 мин",
        complexity: 2,
        type: ["Стратегия"],
        tags: ["Нет"],
        image: "./imagines/Photosynthesis-1000x416-wm.jpg"
    },
    {
        id: 2,
        title: "Серп",
        players: "1-7",
        time: "90-180 мин",
        complexity: 3,
        type: ["Стратегия"],
        tags: ["Захватчики из диких земель"],
        image: "imagines/scythe_box-1000x416-wm.jpg"
    },
    {
        id: 3,
        title: "Война Кольца: Второе издание",
        players: "2-4",
        time: "180+ мин",
        complexity: 4,
        type: ["Стратегия, Дуэль"],
        tags: ["Владыки Средиземья, Воины Средиземья"],
        image: "imagines/Voina_Kolca-1000x416-wm.jpg"
    },
    {
        id: 4,
        title: "Феод",
        players: "2-5",
        time: "180+ мин",
        complexity: 5,
        type: ["Стратегия, Евро"],
        tags: ["нет"],
        image: "imagines/Feudum-1000x416-wm.jpg"
    },
    {
        id: 5,
        title: "Менеджер",
        players: "2-6",
        time: "60-90 мин",
        complexity: 2,
        type: ["Экономика"],
        tags: ["нет"],
        image: "imagines/x3821_nastolnaya-igra-menedzher.jpg"
    },
    {
        id: 6,
        title: "Остров кошек",
        players: "1-4",
        time: "60-90 мин",
        complexity: 2,
        type: ["Стратегия, Логика"],
        tags: ["нет"],
        image: "imagines/Ostrov_Koshek-1000x416-wm.jpg"
    },
    {
        id: 7,
        title: "Нефариус",
        players: "2-6",
        time: "20-40 мин",
        complexity: 2,
        type: ["Стратегия"],
        tags: ["нет"],
        image: "imagines/Nefarius-1980x1980-wm.jpg"
    },
    {
        id: 8,
        title: "500 злобных карт",
        players: "3-100",
        time: "15+ мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/zlobnye-karty.jpg"
    },
    {
        id: 9,
        title: "Ужастик: Тайна особняка Фостеров",
        players: "4-5",
        time: "60-120 мин",
        complexity: 2,
        type: ["Детектив, Хоррор"],
        tags: ["нет"],
        image: "imagines/Ujastik-1000x416-wm.jpg"
    },
    {
        id: 10,
        title: "Твистер",
        players: "2+",
        time: "15+ мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/Twister-1000x416-wm.jpg"
    },
    {
        id: 11,
        title: "Каркассон: Охотники и собиратели",
        players: "2-5",
        time: "40+ мин",
        complexity: 2,
        type: ["Стратегия"],
        tags: ["нет"],
        image: "imagines/Karkasson_Ohotnik_00-1000x416-wm.jpg"
    },
    {
        id: 12,
        title: "Бункер",
        players: "4-16",
        time: "30-60 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/bunker-31c-00-1000x416-wm.jpg"
    },
    {
        id: 13,
        title: "Место преступления: Прекрасная эпоха",
        players: "1-4",
        time: "60-90 мин",
        complexity: 2,
        type: ["Детектив"],
        tags: ["нет"],
        image: "imagines/Mesto_prestuplenia_Prekrasnaya_epokha_01-1000x416-wm.jpg"
    },
    {
        id: 14,
        title: "Шерлок Холмс. Детектив-консультант: Убийства на Темзе и другие расследования",
        players: "1-8",
        time: "90+ мин",
        complexity: 2,
        type: ["Детектив, Квест"],
        tags: ["нет"],
        image: "imagines/Sherlock_Holms-1000x416-wm.jpg"
    }, {
        id: 15,
        title: "Войны Чёрной Розы: Возрождение",
        players: "1-6",
        time: "90+ мин",
        complexity: 3,
        type: ["Стратегия"],
        tags: ["Смертельная маска, Печать огня"],
        image: "imagines/vcr-vozrozhdenie-00-1000x416-wm.jpg"
    }, {
        id: 16,
        title: "Гвинт",
        players: "2",
        time: "30 мин",
        complexity: 2,
        type: ["Карточная, тактическая"],
        tags: ["нет"],
        image: "imagines/gwent.webp"
    }, {
        id: 17,
        title: "Res arcana",
        players: "2-5",
        time: "30-60 мин",
        complexity: 2,
        type: ["Стратегия, карточная"],
        tags: ["Жемчужная империя, Свет и Тьма"],
        image: "imagines/Res_Arcana-1000x416-wm.jpg"
    }, {
        id: 18,
        title: "Таверна Красный Дракон",
        players: "2-4",
        time: "30-60 мин",
        complexity: 2,
        type: ["Карточная, для вечеринок"],
        tags: ["нет"],
        image: "imagines/Taverna_Krasnyj_Drakon00-1000x416-wm.jpg"
    }, {
        id: 19,
        title: "Улей",
        players: "2",
        time: "10-30 мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: ["нет"],
        image: "imagines/ulej00-1000x416-wm.jpg"
    }, {
        id: 20,
        title: "Шляпа. Салонная игра",
        players: "3-16",
        time: "40-90 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/Shlyapa-1000x416-wm.jpg"
    }, {
        id: 21,
        title: "Среди Знати",
        players: "3-5",
        time: "60-120 мин",
        complexity: 2,
        type: ["Стратегия"],
        tags: ["нет"],
        image: "imagines/sredi-znaty.jpg"
    }, {
        id: 22,
        title: "Судный день",
        players: "4-16",
        time: "15-90 мин",
        complexity: 2,
        type: ["Мафия"],
        tags: ["проект Чистилище"],
        image: "imagines/Sudniy_Den-1000x416-wm.jpg"
    }, {
        id: 23,
        title: "Дженга 54",
        players: "2+",
        time: "30 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/jenga.jpg"
    }, {
        id: 24,
        title: "Шахматы",
        players: "2",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль, стратегия"],
        tags: ["нет"],
        image: "imagines/Opening_chess_position_from_black_side.jpg"
    }, {
        id: 25,
        title: "Домино",
        players: "2-4",
        time: "10-30 мин",
        complexity: 1,
        type: ["Стратегия"],
        tags: ["нет"],
        image: "imagines/karpovo-di-news-208_1651837780.jpg"
    }, {
        id: 26,
        title: "Властелин колец: Странствия в Средиземье",
        players: "1-5",
        time: "60+ мин",
        complexity: 2,
        type: ["Сюжетное"],
        tags: ["Темные тропы"],
        image: "imagines/LotR_journey-in-middle-earth-1000x416-wm.jpg"
    }, {
        id: 27,
        title: "Война Кольца: Карточная игра",
        players: "2-4",
        time: "90+ мин",
        complexity: 3,
        type: ["Стратегия, дуэль"],
        tags: ["нет"],
        image: "imagines/voyna_koltsa_kartochnaya_00-1000x416-wm.jpg"
    },
    {
        id: 28,
        title: "Орлеан",
        players: "2-4",
        time: "60-90 мин",
        complexity: 2,
        type: ["Стратегия, евро"],
        tags: ["нет"],
        image: "imagines/Orlean00-1000x416-wm.jpg"
    },
    {
        id: 29,
        title: "Пандемия",
        players: "2-4",
        time: "40+ мин",
        complexity: 2,
        type: ["Стратегия, кооператив"],
        tags: ["нет"],
        image: "imagines/pandemia-2024-00-1000x416-wm.jpg"
    },
    {
        id: 30,
        title: "Роскошь",
        players: "2-4",
        time: "30-45 мин",
        complexity: 2,
        type: ["Стратегия, экономика"],
        tags: ["нет"],
        image: "imagines/roskosh-00-1000x416-wm.jpg"
    },
    {
        id: 31,
        title: "Зараза",
        players: "2-12",
        time: "60 мин",
        complexity: 2,
        type: [""],
        tags: ["нет"],
        image: "imagines/zaraza.jpg"
    },
    {
        id: 32,
        title: "Quoridor (Коридор)",
        players: "2-4",
        time: "10-20 мин",
        complexity: 1,
        type: ["Логика"],
        tags: ["нет"],
        image: "imagines/Koridor-1000x416-wm.jpg"
    },
    {
        id: 33,
        title: "Quarto",
        players: "2",
        time: "10-20 мин",
        complexity: 1,
        type: ["дуэль"],
        tags: ["нет"],
        image: "imagines/Quarto-1000x416-wm.jpg"
    },
    {
        id: 34,
        title: "Обломи меня",
        players: "4-8",
        time: "20+ мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/Oblomi_Menya-1000x416-wm.jpg"
    },
    {
        id: 35,
        title: "Маскарад",
        players: "2-13",
        time: "30+ мин",
        complexity: 2,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/maskarad.jpg"
    },
    {
        id: 36,
        title: "Танграм",
        players: "1-4",
        time: "30 мин",
        complexity: 1,
        type: ["Головоломки"],
        tags: ["нет"],
        image: "imagines/tangram.jpg"
    },
    {
        id: 37,
        title: "Dos",
        players: "2-4",
        time: "20+ мин",
        complexity: 2,
        type: ["Карточная"],
        tags: ["нет"],
        image: "imagines/Dos-1000x416-wm.jpg"
    },
    {
        id: 38,
        title: "Uno",
        players: "2-10",
        time: "15+ мин",
        complexity: 1,
        type: ["Карточная"],
        tags: ["нет"],
        image: "imagines/Uno-1000x416-wm.jpg"
    },
    {
        id: 39,
        title: "КОЗЛОМафия",
        players: "3+",
        time: "30+ мин",
        complexity: 1,
        type: ["Мафия"],
        tags: ["нет"],
        image: "imagines/kozlomafia.jpg"
    },
    {
        id: 40,
        title: "Пей бодрей",
        players: "2+",
        time: "15-30 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/peybodrey.webp"
    },
    {
        id: 41,
        title: "Доббль",
        players: "2-8",
        time: "20-30 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/Doabl_Classic-1000x416-wm.jpg"
    },
    {
        id: 42,
        title: "Эчпочмак",
        players: "2-8",
        time: "20+ мин",
        complexity: 2,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/echpochmak.jpg"
    },
    {
        id: 43,
        title: "Dream Decoder",
        players: "2",
        time: "30 мин",
        complexity: 2,
        type: [""],
        tags: ["нет"],
        image: "imagines/31pmQ9o9FML._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 44,
        title: "Unmatched: Битва Легенд. Том первый",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: ["нет"],
        image: "imagines/UnMatched-1000x416-wm.jpg"
    },
    {
        id: 45,
        title: "Unmatched: Туман над Mостовой",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: ["нет"],
        image: "imagines/Unmatched_Tuman-1000x416-wm.jpg"
    },
    {
        id: 46,
        title: "Unmatched: Удары судьбы",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: ["нет"],
        image: "imagines/um-udari-sudbi-00-1000x416-wm.jpg"
    },
    {
        id: 47,
        title: "Unmatched: Битва Легенд. Том второй",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: ["нет"],
        image: "imagines/unmatched-bitva-legend-tom-vtoroj-00-1000x416-wm.jpg"
    },
    {
        id: 48,
        title: "Unmatched: Красная Шапочка vs. Беовульф",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: ["нет"],
        image: "imagines/shapka_01-1000x416-wm.jpg"
    },
    {
        id: 49,
        title: "Unmatched: Гудини vs. Джинн",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Дуэль"],
        tags: ["нет"],
        image: "imagines/unmatched-gudini-vs-dzhinn-00-1000x416-wm.jpg"
    },
    {
        id: 50,
        title: "Descent: Сказания тьмы",
        players: "1-4",
        time: "180+ мин",
        complexity: 3,
        type: ["Сюжетная"],
        tags: ["нет"],
        image: "imagines/descent_legends_of_the_dark_00-1000x416-wm.jpg"
    },
    {
        id: 51,
        title: "Орифламма",
        players: "3-5",
        time: "25+ мин",
        complexity: 2,
        type: ["Стртегия, карточная"],
        tags: ["нет"],
        image: "imagines/Oriflamma-1000x416-wm.jpg"
    },

    {
        id: 52,
        title: "За бортом",
        players: "4-8",
        time: "40+ мин",
        complexity: 2,
        type: ["Мафия"],
        tags: ["Людоедство, Море по колено, Погода"],
        image: "imagines/Za_Bortom-1000x416-wm.jpg"
    },
    {
        id: 53,
        title: "Догма",
        players: "3-8",
        time: "15-30 мин",
        complexity: 1,
        type: ["Для вечеринок"],
        tags: ["нет"],
        image: "imagines/dogma-00-1000x416-wm.jpg"
    },
    {
        id: 54,
        title: "Защитники Диких Земель",
        players: "1-4",
        time: "60-120 мин",
        complexity: 3,
        type: ["Стратегия, кооператив"],
        tags: ["нет"],
        image: "imagines/zashhitniki-dz-00-1000x416-wm.jpg"
    },
    {
        id: 55,
        title: "Обитель тьмы",
        players: "1-5",
        time: "50 мин",
        complexity: 2,
        type: ["Хоррор, кооператив"],
        tags: ["нет"],
        image: "imagines/obitel_00-1000x416-wm.jpg"
    },
    {
        id: 56,
        title: "EXIT-Квест: Кладбище тьмы",
        players: "1-4",
        time: "60-120 мин",
        complexity: 2,
        type: ["Хоррор, кооператив"],
        tags: ["нет"],
        image: "imagines/Exit_kladbiche_Tmi-1000x416-wm.jpg"
    },
    {
        id: 57,
        title: "EXIT-Квест: Зловещий особняк",
        players: "1-4",
        time: "60-120 мин",
        complexity: 2,
        type: ["Хоррор, кооператив"],
        tags: ["нет"],
        image: "imagines/Exit_Zlovechiy_Osobnyak-1000x416-wm.jpg"
    },
    {
        id: 58,
        title: "Запретный Остров",
        players: "2-4",
        time: "30+ мин",
        complexity: 2,
        type: ["Кооператив, выживание"],
        tags: ["нет"],
        image: "imagines/Zapret_ostr-1000x416-wm.jpg"
    },
    {
        id: 59,
        title: "Лоскутное королевство",
        players: "2-4",
        time: "15 мин",
        complexity: 2,
        type: ["Семейное"],
        tags: ["нет"],
        image: "imagines/Loskutnoe_Korolevstvo-1000x416-wm.jpg"
    },
    {
        id: 60,
        title: "Имаджинариум",
        players: "4-7",
        time: "30-60 мин",
        complexity: 1,
        type: ["Семейное, для вечеринок"],
        tags: ["нет"],
        image: "imagines/DSC_6856-1024x1024-wm.webp"
    },
    {
        id: 61,
        title: "Иниш",
        players: "2-4",
        time: "60-90 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий"],
        tags: ["Сезоны"],
        image: "imagines/Inish-1000x416-wm.jpg"
    },
    {
        id: 62,
        title: "Мафия с масками",
        players: "6-20",
        time: "60+ мин",
        complexity: 1,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/mafia.jpg"
    },
    {
        id: 63,
        title: "Монополия: Игра Престолов",
        players: "2-6",
        time: "60+ мин",
        complexity: 1,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Monopoly_GoT-1000x416-wm.jpg"
    },
    {
        id: 64,
        title: "Эйфория",
        players: "2-6",
        time: "60+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Eyforia-1000x416-wm.jpg"
    },
    {
        id: 65,
        title: "Эвакуация",
        players: "2-5",
        time: "40-60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/evakyacia.jpg"
    },
    {
        id: 66,
        title: "Scrabble",
        players: "2-4",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/scrabbleenl-1000x416-wm.jpg"
    },
    {
        id: 67,
        title: "Скотланд Ярд. Охота на Мистера X",
        players: "2-6",
        time: "45+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Skotland_Yard-1000x416-wm.jpg"
    },
    {
        id: 68,
        title: "Конкордия",
        players: "2-5",
        time: "90+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["Сальса"],
        image: "imagines/konkordia.jpg"
    },
    {
        id: 69,
        title: "Покер",
        players: "2+",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/poker-chips-00-1000x416-wm.jpg"
    },
    {
        id: 70,
        title: "15 игр для вечеринки (Beer pong)",
        players: "2+",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/15_Igr_00-1000x416-wm.jpg"
    },
    {
        id: 71,
        title: "Нуар",
        players: "2-9",
        time: "30-60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Nuar-1000x416-wm.jpg"
    },
    {
        id: 72,
        title: "Чужая планета",
        players: "2-7",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Chujaya_Planeta-1000x416-wm.jpg"
    },
    {
        id: 73,
        title: "На Грани",
        players: "2",
        time: "20-40 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Na_Grani-1000x416-wm.jpg"
    },
    {
        id: 74,
        title: "Ярость Дракулы",
        players: "2-5",
        time: "120-180 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/YArost_Drakuly00-1000x416-wm.jpg"
    },
    {
        id: 75,
        title: "Замес",
        players: "2-4",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["Их много"],
        image: "imagines/Zames_box00-1000x416-wm.jpg"
    },
    {
        id: 76,
        title: "Свинтус 3D",
        players: "2-6",
        time: "15+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/svintus3d_box-1000x416-wm.jpg"
    },
    {
        id: 77,
        title: "Игра престолов",
        players: "3-8",
        time: "120-180 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["Мать драконов"],
        image: "imagines/agot00-1000x416-wm.jpg"
    },
    {
        id: 78,
        title: "Мистериум",
        players: "2-7",
        time: "40-60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Mistrium-1000x416-wm.jpg"
    },
    {
        id: 79,
        title: "Last Will",
        players: "2-5",
        time: "60-90 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Last_Will-1000x416-wm.jpg"
    },
    {
        id: 80,
        title: "Лондон",
        players: "2-4",
        time: "60-90 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/London-1000x416-wm.jpg"
    },
    {
        id: 81,
        title: "Дуэль Двух Миров",
        players: "2",
        time: "15+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Duel_Dvuh_Mirov-1000x416-wm.jpg"
    },
    {
        id: 82,
        title: "Страшные сказки",
        players: "2-4",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["Белоснежка и Красная Шапочка"],
        image: "imagines/Strashnye_Skazki00-1000x416-wm.jpg"
    },
    {
        id: 83,
        title: "Эволюция",
        players: "2-4",
        time: "30-60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Evolution-1000x416-wm.jpg"
    },
    {
        id: 84,
        title: "Catan: Игра Престолов",
        players: "1-5",
        time: "60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/AGOT_Catan_3d-1000x416-wm.jpg"
    },
    {
        id: 85,
        title: "Наше море",
        players: "3-5",
        time: "90+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Nashe_More-1000x416-wm.jpg"
    },
    {
        id: 86,
        title: "Письма призрака",
        players: "2-12",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["Почтовый ящик"],
        image: "imagines/Pisma_Prizraka-1000x416-wm.jpg"
    },
    {
        id: 87,
        title: "Легендарный Манчкин",
        players: "3-6",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Munchkin_Legendarniy00-1000x416-wm.jpg"
    },
    {
        id: 88,
        title: "Виноделие",
        players: "1-6",
        time: "60-180 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Vinodelie_01-1000x416-wm.jpg"
    },
    {
        id: 89,
        title: "Между двух замков безумного короля Людвига",
        players: "2-7",
        time: "45-60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/mez_dvyx_zamkov.png"
    },
    {
        id: 90,
        title: "Доминион",
        players: "2-4",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/dominion_vtoraja-redakcija_3D_roznica-1000x416-wm.jpg"
    },
    {
        id: 91,
        title: "Ticket to Ride: Европа",
        players: "2-5",
        time: "30-60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["Европа: 1912"],
        image: "imagines/Ticket-to-Ride_Europe00-1000x416-wm.jpg"
    },
    {
        id: 92,
        title: "Древний Мир",
        players: "2-4",
        time: "60+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/drevnii_mir.jpg"
    },
    {
        id: 93,
        title: "Взрывные котята",
        players: "2-5",
        time: "15+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/vzryvnye_kotyata_2022-1000x416-wm.jpg"
    },
    {
        id: 94,
        title: "Стрелецкий бунт",
        players: "3-8",
        time: "15+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/streleckii_bynt.jpg"
    },
    {
        id: 95,
        title: "Бэнг!",
        players: "4-7",
        time: "20+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/bang_box_100-1000x416-wm.jpg"
    },
    {
        id: 96,
        title: "Цитадели",
        players: "2-7",
        time: "30-60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/citadels_classic_00-1000x416-wm.jpg"
    },
    {
        id: 97,
        title: "Грешочки",
        players: "3-6",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Greshochki_00-1000x416-wm.jpg"
    },
    {
        id: 98,
        title: "Бонанза",
        players: "3-5",
        time: "45+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Bonanza_00-1000x416-wm.jpg"
    },
    {
        id: 99,
        title: "Печенька",
        players: "2-6",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Pechenka-1000x416-wm.jpg"
    },
    {
        id: 100,
        title: "Гномы-вредители Делюкс",
        players: "2-12",
        time: "30-40 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Gnomi_Vrediteli-1000x416-wm.jpg"
    },
    {
        id: 101,
        title: "Пуэрто-Рико",
        players: "2-5",
        time: "90+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Puerto_Riko_100-1000x416-wm.jpg"
    },
    {
        id: 102,
        title: "Planet (Планета)",
        players: "2-4",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Planet-1000x416-wm.jpg"
    },
    {
        id: 103,
        title: "7 чудес",
        players: "3-7",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/7_Chudes-1000x416-wm.jpg"
    },
    {
        id: 104,
        title: "Босс-монстр",
        players: "2-4",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Boss_Monstr-1000x416-wm.jpg"
    },
    {
        id: 105,
        title: "Волшебные королевства",
        players: "2-6",
        time: "10+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Volshebnoe_Korolevstva-1000x416-wm.jpg"
    },
    {
        id: 106,
        title: "Нечто: Из глубокой бездны",
        players: "4-12",
        time: "15-60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Nechto00-1000x416-wm.jpg"
    },
    {
        id: 107,
        title: "Тёмные Истории. Джуниор: Белые Истории",
        players: "2-15",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/belie_istorii.jpg"
    },
    {
        id: 108,
        title: "Ну уж НЕТ!",
        players: "2-8",
        time: "20+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/NET.jpg"
    },
    {
        id: 109,
        title: "3 секрета",
        players: "2-8",
        time: "15+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/3_Sekreta-1000x416-wm.jpg"
    },
    {
        id: 110,
        title: "3 Секрета: Время Преступления",
        players: "2-8",
        time: "15+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/3_Sekreta-dop.jpg"
    },
    {
        id: 111,
        title: "Danse Macabre",
        players: "2",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/danse.webp"
    },
    {
        id: 112,
        title: "Монстр по соседству",
        players: "3-8",
        time: "20+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Monstr_Po_Sosedstvu-1000x416-wm.jpg"
    },
    {
        id: 113,
        title: "Да, Темный Властелин!",
        players: "4-9",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/ADO00-1000x416-wm.jpg"
    },
    {
        id: 114,
        title: "Место преступления: Средневековье",
        players: "1-4",
        time: "60-90 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Mesto_Prestupleniya_Srednevekovye00-1000x416-wm.jpg"
    },
    {
        id: 115,
        title: "Codenames",
        players: "2-8",
        time: "15+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Codenames00-1000x416-wm.jpg"
    },
    {
        id: 116,
        title: "Codenames: Pictures",
        players: "2-8",
        time: "15+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Codenames_Pictures-1000x416-wm.jpg"
    },
    {
        id: 117,
        title: "Alias Original",
        players: "4+",
        time: "60+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Alias_Original-1000x416-wm.jpg"
    },
    {
        id: 118,
        title: "Мёртвый сезон: Перекрёстки",
        players: "2-5",
        time: "60-120 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Myortvyj_Sezon_Perekryostki00-1000x416-wm.jpg"
    },
    {
        id: 119,
        title: "Агентство ВРЕМЯ",
        players: "2-4",
        time: "90-360 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["Дело Марси, Пророчество о драконах, Под маской, Тайна „Эндьюранса“, Эстрелья-драйв, Береговое братство, Мадам"],
        image: "imagines/1-1000x416-wm.jpg"
    },
    {
        id: 120,
        title: "Каркасон",
        players: "2-5",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/carcassonne_2022_00-1000x416-wm.jpg"
    },
    {
        id: 121,
        title: "Детектор Правды",
        players: "3-10",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/detector.jpg"
    },
    {
        id: 122,
        title: "Древний Ужас",
        players: "1-8",
        time: "120-240 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["Хребты Безумия, Знамения Каркозы, Забытые Тайны"],
        image: "imagines/EH00-1000x416-wm.jpg"
    },
    {
        id: 123,
        title: "Андор",
        players: "2-4",
        time: "60-90 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Andor-1000x416-wm.jpg"
    },
    {
        id: 124,
        title: "Крёстный отец. Империя Корлеоне",
        players: "2-5",
        time: "60-90 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/large_Box_GDF_rus_small.png"
    },
    {
        id: 125,
        title: "Таверна Красный Дракон: Злодеи",
        players: "2-4",
        time: "30-60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/zlodei_00-1000x416-wm.jpg"
    },
    {
        id: 126,
        title: "Страдающее Средневековье",
        players: "3-6",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Stradayuchee_Srednevekove-1000x416-wm.jpg"
    },
    {
        id: 127,
        title: "Эволюция. Подарочное издание",
        players: "2-6",
        time: "30-60 мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/Evolution_Podarochnoe-1000x416-wm.jpg"
    },
    {
        id: 128,
        title: "Тайное послание",
        players: "2-4",
        time: "10+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/tainoe_poslanie.jpg"
    },
    {
        id: 129,
        title: "Нарды",
        players: "2",
        time: "30+ мин",
        complexity: 3,
        type: ["Стратегия, контроль территорий, дополнение"],
        tags: ["нет"],
        image: "imagines/nardy.jpg"
    },
    //докидывай сюда игр
];

export default games;