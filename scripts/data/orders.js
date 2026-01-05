export const orders = [];
export function addToOrders(order) {
    orders.unshift(order);
    console.log(orders);
    saveToStorage();
}
function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}
