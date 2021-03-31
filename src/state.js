export const state = {
    catalog: {
        items: [
            {
                id: 101,
                category: 10,
                title: "Чиззи чеддер",
                description: "Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус, чеснок, итальянские травы",
                cost: 395,
                image: "http://pngimg.com/uploads/pizza/pizza_PNG44095.png",
            },
            {
                id: 102,
                category: 10,
                title: "Цезарь",
                description: "Свежие листья салата айсберг, цыплёнок, томаты черри, сыры чеддер и пармезан, моцарелла, сливочный соус, соус цезарь",
                cost: 445,
                image: "http://pngimg.com/uploads/pizza/pizza_PNG44090.png",
            },
            {
                id: 103,
                category: 10,
                title: "Цыпленок блю чиз",
                description: "Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо",
                cost: 445,
                image: "http://pngimg.com/uploads/pizza/pizza_PNG44092.png",
            },
            {
                id: 104,
                category: 10,
                title: "Нежный лосось",
                description: "Лосось, томаты черри, соус песто, моцарелла, соус альфредо",
                cost: 495,
                image: "http://pngimg.com/uploads/pizza/pizza_PNG44077.png",
            },
            {
                id: 105,
                category: 10,
                title: "Сырная",
                description: "Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо",
                cost: 245,
                image: "http://pngimg.com/uploads/pizza/pizza_PNG44095.png",
            },
            {
                id: 106,
                category: 10,
                title: "Пепперони фреш",
                description: "Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус",
                cost: 245,
                image: "http://pngimg.com/uploads/pizza/pizza_PNG44090.png",
            },
            {
                id: 107,
                category: 10,
                title: "Кисло-сладкий цыпленок",
                description: "Цыпленок, кисло-сладкий соус, моцарелла, томатный соус",
                cost: 295,
                image: "http://pngimg.com/uploads/pizza/pizza_PNG44092.png",
            },
            {
                id: 108,
                category: 10,
                title: "Ветчина и сыр",
                description: "Ветчина, моцарелла, соус альфредо",
                cost: 295,
                image: "http://pngimg.com/uploads/pizza/pizza_PNG44077.png",
            },
        ],
        categories: {
            10: "Пицца",
            11: "Другое",
        }
    },
    shoppingBasket: {
        items: [
            {
                id: 101,
                title: "Чиззи чеддер",
                cost: 395,
                count: 2,
            }
        ],
        totalCost: 790,
    },
}