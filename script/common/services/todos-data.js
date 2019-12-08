app.factory('todos', function() {
    return [{
            'title': 'Randka z Beatką',
            'done': false,
            "type": { "name": "Personalne", "gico": "heart" },
            'estimates': 3,
            "date": "11/11/2019"
        },
        {
            'title': 'Siłownia',
            'done': false,
            "type": { "name": "Zdrowie", "gico": "tint" },
            'estimates': 2,
            "date": "12/11/2019"
        },
        {
            'title': 'AngularJS next steps',
            'done': false,
            "type": { "name": "Nauka", "gico": "book" },
            'estimates': 4,
            "date": "14/11/2019"
        },
        {
            'title': 'Spotkanie z Maciejem',
            'done': false,
            "type": { "name": "Biznes", "gico": "usd" },
            'estimates': 1,
            "date": "15/11/2019"
        }
    ];
});