let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById("cart-count").innerText = cart.length;
  alert(name + " added to cart!");
}

document.getElementById("cart-btn").addEventListener("click", function() {
  showCart();
});

function showCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
  document.getElementById("cart-total").innerText = total.toFixed(2);
  document.getElementById("cart-popup").style.display = "block";
}

function closeCart() {
  document.getElementById("cart-popup").style.display = "none";
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for purchasing gadgets worth $" + total.toFixed(2));
    cart = [];
    total = 0;
    document.getElementById("cart-count").innerText = "0";
    closeCart();
  }
}
