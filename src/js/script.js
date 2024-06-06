const cart = {
    items: {},
    totalItems: 0,
    totalPrice: 0.00
};



function showPizzas() {
    document.getElementById("container1").style.display = "block";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";
    restoreCart();
}

function showBurgers() {
    document.getElementById("container2").style.display = "block";
    document.getElementById("container1").style.display = "none";
    document.getElementById("container3").style.display = "none";
    restoreCart();
}

function showDrinks() {
    document.getElementById("container3").style.display = "block";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container1").style.display = "none";
    restoreCart();
}

function restoreCart() {
    for (const ItemId in cart.items) {
        const counterElement = document.getElementById('counter' + ItemId);
        if (counterElement) {
            counterElement.textContent = cart.items[ItemId];
        }
    }
    document.getElementById('cart-count').textContent = cart.totalItems;
    document.getElementById('total-price').textContent = cart.totalPrice.toFixed(2);
}

function decrement(ItemId) {
    const counterElement = document.getElementById('counter' + ItemId);
    let currentValue = parseInt(counterElement.textContent, 10);
    if (currentValue > 0) {
        counterElement.textContent = currentValue - 1;
        cart.items[ItemId] = (cart.items[ItemId] || 0) - 1;
        if (cart.items[ItemId] <= 0) {
            delete cart.items[ItemId];
        }
    }
    updateCart();
}

function increment(ItemId) {
    const counterElement = document.getElementById('counter' + ItemId);
    let currentValue = parseInt(counterElement.textContent, 10);
    counterElement.textContent = currentValue + 1;
    cart.items[ItemId] = (cart.items[ItemId] || 0) + 1;
    updateCart();
}

function updateCart() {
    let totalItems = 0;
    let totalPrice = 0.00;

    for (const ItemId in cart.items) {
        const count = cart.items[ItemId];
        totalItems += count;
        const priceElement = document.getElementById('counter' + ItemId).closest('.food-card').querySelector('.price');
        const price = parseFloat(priceElement.textContent.replace('$', ''));
        totalPrice += count * price;
    }

    cart.totalItems = totalItems;
    cart.totalPrice = totalPrice;

    document.getElementById('cart-count').textContent = totalItems;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}



