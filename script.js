const foods = [

    // БУРГЕРЫ

    {
        id: 1,
        name: "Двойной чизбургер",
        category: "burger",
        emoji: "🍔",
        price: 2200,
        ingredients: "2 говяжьи котлеты, двойной сыр, салат, помидор, огурец, лук и фирменный соус",
        rating: 5
    },

    {
        id: 2,
        name: "Классический бургер",
        category: "burger",
        emoji: "🍔",
        price: 1600,
        ingredients: "Говяжья котлета, сыр, салат, помидор, лук и кетчуп",
        rating: 4
    },

    {
        id: 3,
        name: "Чикен бургер",
        category: "burger",
        emoji: "🍔",
        price: 1700,
        ingredients: "Куриная котлета, сыр, салат, помидор и чесночный соус",
        rating: 5
    },

    {
        id: 4,
        name: "BBQ бургер",
        category: "burger",
        emoji: "🍔",
        price: 1900,
        ingredients: "Говяжья котлета, сыр, бекон, лук и соус BBQ",
        rating: 5
    },

    {
        id: 5,
        name: "Бургер с двойным сыром",
        category: "burger",
        emoji: "🍔",
        price: 2000,
        ingredients: "Говяжья котлета, двойной сыр, салат, помидор и фирменный соус",
        rating: 5
    },


    // ПИЦЦА

    {
        id: 6,
        name: "Пицца Пепперони",
        category: "pizza",
        emoji: "🍕",
        price: 2500,
        ingredients: "Тесто, томатный соус, моцарелла и пепперони",
        rating: 5
    },

    {
        id: 7,
        name: "Пицца 4 сыра",
        category: "pizza",
        emoji: "🍕",
        price: 2800,
        ingredients: "Моцарелла, пармезан, чеддер и дорблю",
        rating: 5
    },

    {
        id: 8,
        name: "Пицца с курицей",
        category: "pizza",
        emoji: "🍕",
        price: 2600,
        ingredients: "Курица, моцарелла, грибы и томатный соус",
        rating: 4
    },

    {
        id: 9,
        name: "Маргарита",
        category: "pizza",
        emoji: "🍕",
        price: 2200,
        ingredients: "Томатный соус, моцарелла, помидоры и базилик",
        rating: 4
    },

    {
        id: 10,
        name: "Мясная пицца",
        category: "pizza",
        emoji: "🍕",
        price: 3000,
        ingredients: "Говядина, курица, колбаса, сыр и томатный соус",
        rating: 5
    },


    // СУШИ

    {
        id: 11,
        name: "Филадельфия",
        category: "sushi",
        emoji: "🍣",
        price: 2800,
        ingredients: "Лосось, сливочный сыр, рис и нори",
        rating: 5
    },

    {
        id: 12,
        name: "Калифорния",
        category: "sushi",
        emoji: "🍣",
        price: 2600,
        ingredients: "Краб, авокадо, огурец, рис и нори",
        rating: 5
    },

    {
        id: 13,
        name: "Темпура ролл",
        category: "sushi",
        emoji: "🍣",
        price: 2400,
        ingredients: "Креветка, сливочный сыр, огурец и хрустящая темпура",
        rating: 4
    },

    {
        id: 14,
        name: "Большой суши-сет",
        category: "sushi",
        emoji: "🍱",
        price: 4500,
        ingredients: "Филадельфия, Калифорния, маки и темпура роллы",
        rating: 5
    },


    // САЛАТЫ

    {
        id: 15,
        name: "Цезарь с курицей",
        category: "salad",
        emoji: "🥗",
        price: 1400,
        ingredients: "Курица, салат айсберг, сухарики, пармезан и соус Цезарь",
        rating: 5
    },

    {
        id: 16,
        name: "Греческий салат",
        category: "salad",
        emoji: "🥗",
        price: 1300,
        ingredients: "Помидоры, огурцы, сыр фета, маслины и зелень",
        rating: 4
    },

    {
        id: 17,
        name: "Овощной салат",
        category: "salad",
        emoji: "🥗",
        price: 900,
        ingredients: "Помидоры, огурцы, капуста, зелень и лёгкая заправка",
        rating: 4
    },


    // СУПЫ

    {
        id: 18,
        name: "Борщ",
        category: "soup",
        emoji: "🍲",
        price: 1200,
        ingredients: "Свёкла, капуста, картофель, морковь, мясо и сметана",
        rating: 5
    },

    {
        id: 19,
        name: "Куриный суп",
        category: "soup",
        emoji: "🍜",
        price: 1100,
        ingredients: "Курица, картофель, морковь, лук и зелень",
        rating: 5
    },

    {
        id: 20,
        name: "Солянка",
        category: "soup",
        emoji: "🍲",
        price: 1400,
        ingredients: "Мясо, колбаса, солёные огурцы, лук и маслины",
        rating: 4
    },

    {
        id: 21,
        name: "Суп-пюре с курицей",
        category: "soup",
        emoji: "🥣",
        price: 1300,
        ingredients: "Картофель, курица, сливки, морковь и зелень",
        rating: 5
    },


    // ГОРЯЧЕЕ

    {
        id: 22,
        name: "Котлета с картошкой",
        category: "hot",
        emoji: "🥔",
        price: 1500,
        ingredients: "Домашняя мясная котлета, картофельное пюре, лук и соус",
        rating: 5
    },

    {
        id: 23,
        name: "Куриная котлета с пюре",
        category: "hot",
        emoji: "🍗",
        price: 1450,
        ingredients: "Куриная котлета, картофельное пюре и сливочный соус",
        rating: 5
    },

    {
        id: 24,
        name: "Мясо с картофелем",
        category: "hot",
        emoji: "🥩",
        price: 1800,
        ingredients: "Говядина, картофель, лук, морковь и специи",
        rating: 5
    },

    {
        id: 25,
        name: "Курица с рисом",
        category: "hot",
        emoji: "🍗",
        price: 1600,
        ingredients: "Куриное филе, рис, овощи и специальный соус",
        rating: 4
    },

    {
        id: 26,
        name: "Плов",
        category: "hot",
        emoji: "🍚",
        price: 1700,
        ingredients: "Рис, мясо, морковь, лук и специи",
        rating: 5
    },

    {
        id: 27,
        name: "Гуляш с пюре",
        category: "hot",
        emoji: "🍛",
        price: 1750,
        ingredients: "Говядина, картофельное пюре, лук и соус",
        rating: 5
    },

    {
        id: 28,
        name: "Макароны с котлетой",
        category: "hot",
        emoji: "🍝",
        price: 1500,
        ingredients: "Макароны, мясная котлета, сыр и томатный соус",
        rating: 4
    },

    {
        id: 29,
        name: "Гречка с курицей",
        category: "hot",
        emoji: "🍗",
        price: 1400,
        ingredients: "Гречка, куриное филе, морковь и лук",
        rating: 5
    },


    // ПАСТА

    {
        id: 30,
        name: "Паста Карбонара",
        category: "pasta",
        emoji: "🍝",
        price: 1700,
        ingredients: "Спагетти, сливочный соус, бекон, сыр и яйцо",
        rating: 5
    },

    {
        id: 31,
        name: "Паста Болоньезе",
        category: "pasta",
        emoji: "🍝",
        price: 1800,
        ingredients: "Спагетти, мясной фарш, томатный соус и сыр",
        rating: 5
    },


    // ДЕСЕРТЫ

    {
        id: 32,
        name: "Чизкейк",
        category: "dessert",
        emoji: "🍰",
        price: 1200,
        ingredients: "Сливочный сыр, печенье и ягодный соус",
        rating: 5
    },

    {
        id: 33,
        name: "Шоколадный десерт",
        category: "dessert",
        emoji: "🍫",
        price: 1000,
        ingredients: "Шоколад, сливки и бисквит",
        rating: 4
    },

    {
        id: 34,
        name: "Мороженое",
        category: "dessert",
        emoji: "🍨",
        price: 800,
        ingredients: "Сливочное мороженое и шоколадный топпинг",
        rating: 5
    },


    // НАПИТКИ

    {
        id: 35,
        name: "Кола",
        category: "drink",
        emoji: "🥤",
        price: 500,
        ingredients: "Газированный напиток 0,5 л",
        rating: 4
    },

    {
        id: 36,
        name: "Лимонад",
        category: "drink",
        emoji: "🍋",
        price: 700,
        ingredients: "Лимон, вода, сахар и мята",
        rating: 5
    },

    {
        id: 37,
        name: "Холодный чай",
        category: "drink",
        emoji: "🍋",
        price: 600,
        ingredients: "Чёрный чай, лимон и лёд",
        rating: 4
    }

];


// ======================================
// ДАННЫЕ
// ======================================

let cart =
    JSON.parse(localStorage.getItem("quickLunchCart")) || [];

let orders =
    JSON.parse(localStorage.getItem("quickLunchOrders")) || [];

let reviews =
    JSON.parse(localStorage.getItem("quickLunchReviews")) || [];

let favorites =
    JSON.parse(localStorage.getItem("quickLunchFavorites")) || [];

let currentCategory = "all";


// ======================================
// МЕНЮ
// ======================================

function showMenu() {

    const menuList =
        document.getElementById("menuList");

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    let filteredFoods = foods.filter(food => {

        let categoryMatch = true;

        if (currentCategory === "favorites") {

            categoryMatch =
                favorites.includes(food.id);

        } else if (currentCategory !== "all") {

            categoryMatch =
                food.category === currentCategory;

        }


        const searchMatch =
            food.name
                .toLowerCase()
                .includes(search) ||

            food.ingredients
                .toLowerCase()
                .includes(search);


        return categoryMatch && searchMatch;

    });


    // ИЗБРАННЫЕ ВСЕГДА ПОДНИМАЮТСЯ ВВЕРХ

    filteredFoods.sort((a, b) => {

        const aFavorite =
            favorites.includes(a.id);

        const bFavorite =
            favorites.includes(b.id);


        if (aFavorite && !bFavorite) {
            return -1;
        }

        if (!aFavorite && bFavorite) {
            return 1;
        }

        return 0;

    });


    if (filteredFoods.length === 0) {

        menuList.innerHTML = `
            <div class="empty">
                ❤️ Здесь пока нет избранных блюд.
            </div>
        `;

        return;
    }


    menuList.innerHTML =
        filteredFoods.map(food => {

            const isFavorite =
                favorites.includes(food.id);


            const stars =
                "★".repeat(food.rating) +
                "☆".repeat(5 - food.rating);


            return `

                <article class="food-card">

                    <button
                        class="favorite-button ${isFavorite ? "active" : ""}"
                        onclick="toggleFavorite(${food.id})"
                        title="Добавить в избранное"
                    >
                        ${isFavorite ? "❤️" : "♡"}
                    </button>


                    <div class="food-image">
                        ${food.emoji}
                    </div>


                    ${
                        isFavorite
                        ?
                        `<div class="favorite-label">
                            ❤️ В избранном
                        </div>`
                        :
                        ""
                    }


                    <h3>
                        ${food.name}
                    </h3>


                    <p class="ingredients">
                        ${food.ingredients}
                    </p>


                    <div class="rating">
                        ${stars}
                    </div>


                    <div class="food-bottom">

                        <span class="price">
                            ${food.price.toLocaleString()} ₸
                        </span>


                        <button
                            class="order-button"
                            onclick="addToCart(${food.id})"
                        >
                            + В корзину
                        </button>

                    </div>

                </article>

            `;

        }).join("");

}


// ======================================
// ИЗБРАННОЕ
// ======================================

function toggleFavorite(foodId) {

    const index =
        favorites.indexOf(foodId);


    if (index === -1) {

        favorites.push(foodId);

        alert("❤️ Блюдо добавлено в избранное!");

    } else {

        favorites.splice(index, 1);

        alert("Блюдо убрано из избранного.");

    }


    localStorage.setItem(
        "quickLunchFavorites",
        JSON.stringify(favorites)
    );


    showMenu();
}


// ======================================
// ФИЛЬТР
// ======================================

function filterMenu(category, button) {

    currentCategory = category;


    document
        .querySelectorAll(".category")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    button.classList.add("active");


    showMenu();
}


// ======================================
// ПОИСК
// ======================================

function searchFood() {

    showMenu();

}


// ======================================
// КОРЗИНА
// ======================================

function addToCart(foodId) {

    const food =
        foods.find(item => item.id === foodId);


    if (!food) return;


    const existing =
        cart.find(item => item.id === foodId);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: food.id,

            name: food.name,

            emoji: food.emoji,

            price: food.price,

            quantity: 1

        });

    }


    saveCart();

    updateCart();


    alert(
        `${food.name} добавлен в корзину!`
    );

}


function saveCart() {

    localStorage.setItem(
        "quickLunchCart",
        JSON.stringify(cart)
    );

}


function updateCart() {

    const count =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    document.getElementById(
        "cartCount"
    ).textContent = count;


    document.getElementById(
        "cartPreviewText"
    ).textContent =
        count === 0
        ?
        "Пока в корзине ничего нет."
        :
        `В корзине ${count} ${getItemWord(count)}.`;


    renderCart();

}


function getItemWord(number) {

    if (
        number % 10 === 1 &&
        number % 100 !== 11
    ) {
        return "товар";
    }


    if (
        number % 10 >= 2 &&
        number % 10 <= 4 &&
        (
            number % 100 < 10 ||
            number % 100 >= 20
        )
    ) {
        return "товара";
    }


    return "товаров";

}


// ======================================
// ОТОБРАЖЕНИЕ КОРЗИНЫ
// ======================================

function renderCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty">
                🛒 Корзина пуста
            </div>
        `;

        cartTotal.textContent = "0 ₸";

        return;
    }


    cartItems.innerHTML =
        cart.map(item => {

            return `

                <div class="cart-item">

                    <div class="cart-item-emoji">
                        ${item.emoji}
                    </div>


                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <p>
                            ${item.price.toLocaleString()} ₸
                        </p>

                    </div>


                    <div class="quantity">

                        <button
                            onclick="changeQuantity(${item.id}, -1)"
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
                            onclick="changeQuantity(${item.id}, 1)"
                        >
                            +
                        </button>

                    </div>


                    <strong>
                        ${(item.price * item.quantity)
                            .toLocaleString()} ₸
                    </strong>


                    <button
                        class="remove-button"
                        onclick="removeFromCart(${item.id})"
                    >
                        Удалить
                    </button>

                </div>

            `;

        }).join("");


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price * item.quantity,
            0
        );


    cartTotal.textContent =
        `${total.toLocaleString()} ₸`;

}


function changeQuantity(foodId, change) {

    const item =
        cart.find(item => item.id === foodId);


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== foodId
            );

    }


    saveCart();

    updateCart();

}


function removeFromCart(foodId) {

    cart =
        cart.filter(
            item => item.id !== foodId
        );


    saveCart();

    updateCart();

}


function openCart() {

    renderCart();

    document
        .getElementById("cartModal")
        .classList.add("active");

}


function closeCart() {

    document
        .getElementById("cartModal")
        .classList.remove("active");

}


// ======================================
// ЗАКАЗ
// ======================================

function confirmOrder() {

    if (cart.length === 0) {

        alert("Корзина пуста!");

        return;
    }


    const name =
        document
            .getElementById("customerName")
            .value
            .trim();


    if (!name) {

        alert("Введите ваше имя.");

        return;
    }


    const now = new Date();


    const date =
        now.toLocaleDateString("ru-RU");


    const time =
        now.toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit"
        });


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price * item.quantity,
            0
        );


    const order = {

        id: Date.now(),

        name: name,

        items: [...cart],

        total: total,

        date: date,

        time: time

    };


    orders.unshift(order);


    localStorage.setItem(
        "quickLunchOrders",
        JSON.stringify(orders)
    );


    cart = [];

    saveCart();

    updateCart();

    showHistory();


    document.getElementById(
        "customerName"
    ).value = "";


    closeCart();


    alert(
        `Спасибо, ${name}!\n\n` +
        `Заказ оформлен.\n` +
        `Сумма: ${total.toLocaleString()} ₸\n` +
        `Время: ${time}`
    );

}


// ======================================
// ИСТОРИЯ
// ======================================

function showHistory() {

    const historyList =
        document.getElementById(
            "historyList"
        );


    if (orders.length === 0) {

        historyList.innerHTML = `
            <div class="empty">
                📋 У вас пока нет заказов.
            </div>
        `;

        return;
    }


    historyList.innerHTML =
        orders.map(order => {

            const items =
                order.items
                    .map(
                        item =>
                            `${item.name} × ${item.quantity}`
                    )
                    .join(", ");


            return `

                <div class="history-card">

                    <div class="history-top">

                        <div>

                            <h3>
                                🧾 Заказ #${String(order.id).slice(-5)}
                            </h3>

                            <p>
                                👤 ${order.name}
                            </p>

                            <p>
                                🍽️ ${items}
                            </p>

                        </div>

                        <strong>
                            ${order.total.toLocaleString()} ₸
                        </strong>

                    </div>

                    <p>
                        📅 ${order.date}
                        &nbsp;
                        ⏰ ${order.time}
                    </p>

                </div>

            `;

        }).join("");

}


function clearHistory() {

    if (orders.length === 0) {

        alert("История уже пустая.");

        return;
    }


    if (
        !confirm(
            "Очистить историю заказов?"
        )
    ) {
        return;
    }


    orders = [];


    localStorage.removeItem(
        "quickLunchOrders"
    );


    showHistory();

}


// ======================================
// ОТЗЫВЫ
// ======================================

function addReview() {

    const name =
        document
            .getElementById("reviewName")
            .value
            .trim();


    const rating =
        Number(
            document
                .getElementById("reviewRating")
                .value
        );


    const text =
        document
            .getElementById("reviewText")
            .value
            .trim();


    if (!name || !text) {

        alert(
            "Введите имя и текст отзыва."
        );

        return;
    }


    const review = {

        id: Date.now(),

        name: name,

        rating: rating,

        text: text,

        date:
            new Date().toLocaleDateString(
                "ru-RU"
            )

    };


    reviews.unshift(review);


    localStorage.setItem(
        "quickLunchReviews",
        JSON.stringify(reviews)
    );


    document.getElementById(
        "reviewName"
    ).value = "";


    document.getElementById(
        "reviewText"
    ).value = "";


    showReviews();


    alert(
        "Спасибо! Ваш отзыв опубликован."
    );

}


function showReviews() {

    const reviewsList =
        document.getElementById(
            "reviewsList"
        );


    if (reviews.length === 0) {

        reviewsList.innerHTML = `
            <div class="empty">
                ⭐ Пока нет отзывов.
            </div>
        `;

        return;
    }


    reviewsList.innerHTML =
        reviews.map(review => {

            const stars =
                "★".repeat(review.rating) +
                "☆".repeat(5 - review.rating);


            return `

                <article class="review-card">

                    <div class="review-header">

                        <strong>
                            ${review.name}
                        </strong>

                        <span class="review-stars">
                            ${stars}
                        </span>

                    </div>

                    <p>
                        ${review.text}
                    </p>

                    <span class="review-date">
                        ${review.date}
                    </span>

                </article>

            `;

        }).join("");

}


// ======================================
// ПРОКРУТКА
// ======================================

function scrollToMenu() {

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ======================================
// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА
// ======================================

document
    .getElementById("cartModal")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {
                closeCart();
            }

        }
    );


// ======================================
// ЗАПУСК
// ======================================

showMenu();

showHistory();

showReviews();

updateCart();