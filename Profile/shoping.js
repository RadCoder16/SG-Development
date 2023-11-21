const cartItems = [];

function addTiCart(productName, price){
    const item = {
        name: productName,
        price: price
    };
    cartItems.push(item);
    displayCart();
}

function displayCart(){
    const cartList = document.getElementById('cart-items');
    cartItems.forEach(item =>{
        const li = document.createElement('li');
        li.textContent = '${item.name} -$${item.price}';
        cartList.appendChild(li);
    });
}