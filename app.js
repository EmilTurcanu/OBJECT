let order = {
    name: "pizza",
    price: 100,
    image: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    available: true,
    quantity: 0
}
function increaseQuantity() {
    order.quantity++
    if (order.quantity > 10) {
        order.quantity = 10
    }
    showOrder()
}
function lessQuantity() {
    order.quantity--
    if (order.quantity < 0) {
        order.quantity = 0
    }
    showOrder()
}
function price() {
    return order.price * order.quantity
}
function showOrder () {
    content.innerHTML = `
    <h2>${order.name}</h2>
    <img src="${order.image}" width="200px"/>
    <p>${price()}</p>
    <p>${order.available ? 'available' : 'not available'}</p>
    ${order.available ? `<div><button onclick="lessQuantity()">-</button><span>${order.quantity}</span><button onclick="increaseQuantity()">+</button></div>` : ''}
    `
}
showOrder()
