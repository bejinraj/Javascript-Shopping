let pizzaCartCount = 0;
let burgerCartCount = 0;
let cart = document.getElementById("cart");

let pizzaCount = document.getElementById("pizza-count");
let pizzaPlusBtn = document.getElementById("pizza-plus-btn");
let pizzaMinusBtn = document.getElementById("pizza-minus-btn");
let pizzaAddToCart = document.getElementById("pizza-addtocart");
let pizzaBlock = document.getElementById("pizza-block");

let burgerCount = document.getElementById("burger-count");
let burgerPlusBtn = document.getElementById("burger-plus-btn");
let burgerMinusBtn = document.getElementById("burger-minus-btn");
let burgerAddToCart = document.getElementById("burger-addtocart");
let burgerBlock = document.getElementById("burger-block");

window.addEventListener("load", () => {
  burgerBlock.style.display = "none";
  pizzaBlock.style.display = "none";
  cart.innerHtml = "Cart";
});

pizzaPlusBtn.addEventListener("click", () => {
  pizzaCartCount = pizzaCartCount + 1;
  pizzaCount.innerHTML = pizzaCartCount;
  cart.innerHTML = `Cart ${pizzaCartCount + burgerCartCount}`;
});

pizzaMinusBtn.addEventListener("click", () => {
  if (pizzaCartCount > 0) {
    pizzaCartCount = pizzaCartCount - 1;
    pizzaCount.innerHTML = pizzaCartCount;
    cart.innerHTML = `Cart ${pizzaCartCount + burgerCartCount}`;
    if (pizzaCartCount === 0) {
      pizzaAddToCart.style.display = "block";
      pizzaBlock.style.display = "none";
      cart.innerHTML = "Cart";
    }
  }
});

pizzaAddToCart.addEventListener("click", () => {
  pizzaCartCount = pizzaCartCount + 1;
  pizzaCount.innerHTML = pizzaCartCount;
  cart.innerHTML = `Cart ${pizzaCartCount + burgerCartCount}`;
  pizzaAddToCart.style.display = "none";
  pizzaBlock.style.display = "flex";
});

burgerPlusBtn.addEventListener("click", () => {
  burgerCartCount = burgerCartCount + 1;
  burgerCount.innerHTML = burgerCartCount;
  cart.innerHTML = `Cart ${pizzaCartCount + burgerCartCount}`;
});

burgerMinusBtn.addEventListener("click", () => {
  if (burgerCartCount > 0) {
    burgerCartCount = burgerCartCount - 1;
    burgerCount.innerHTML = burgerCartCount;
    cart.innerHTML = `Cart ${pizzaCartCount + burgerCartCount}`;
    if (burgerCartCount === 0) {
      burgerAddToCart.style.display = "block";
      burgerBlock.style.display = "none";
      cart.innerHTML = "Cart";
    }
  }
});

burgerAddToCart.addEventListener("click", () => {
  burgerCartCount = burgerCartCount + 1;
  burgerCount.innerHTML = burgerCartCount;
  cart.innerHTML = `Cart ${pizzaCartCount + burgerCartCount}`;
  burgerAddToCart.style.display = "none";
  burgerBlock.style.display = "flex";
});
