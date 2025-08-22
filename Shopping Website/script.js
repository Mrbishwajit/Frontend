let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  displayCart();
}

function displayCart() {
  let cartList = document.getElementById("cartList");
  let totalPrice = document.getElementById("totalPrice");

  cartList.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - ₹${item.price}`;
    cartList.appendChild(li);
  });

  totalPrice.textContent = total;
}
