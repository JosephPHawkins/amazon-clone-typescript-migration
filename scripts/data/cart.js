export let cart;
loadFromStorage();
export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem("cart")) || [
        {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: "1",
        },
        {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: "2",
        },
    ];
}
function saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
export function addToCart(productId, quantityVal) {
    const existingItem = cart.find((item) => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantityVal;
    }
    else {
        cart.push({
            productId,
            quantity: quantityVal,
            deliveryOptionId: "1",
        });
    }
    saveToStorage();
}
export function removeFromCart(productId) {
    cart = cart.filter((item) => item.productId !== productId);
    saveToStorage();
}
export function updateCartDelivery(productId, deliveryOptionId) {
    const item = cart.find((item) => item.productId === productId);
    if (item) {
        item.deliveryOptionId = deliveryOptionId;
        saveToStorage();
    }
}
export function loadCart(fun) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        console.log('load cart');
        fun();
    });
    xhr.open('GET', 'https://supersimplebackend.dev/cart');
    xhr.send();
}
