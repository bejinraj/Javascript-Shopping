let count = 0;
let paragraph = document.getElementById("num");
let cart = document.getElementById("cart");
let incBtn = document.getElementById("plus-btn");
let decBtn = document.getElementById("minus-btn");
let addToCart = document.getElementById("addtocart");
let add = document.getElementById("count");

add.style.display = "none";
cart.innerHtml= "Cart";

incBtn.addEventListener("click", () => {
  count = count + 1;
  paragraph.innerHTML = count;
  cart.innerHTML = `Cart ${count}`;
});

decBtn.addEventListener("click", () => {
  if (count > 0) {
    count = count - 1;
    paragraph.innerHTML = count;
    cart.innerHTML = `Cart ${count}`;
    if (count === 0) {
      addToCart.style.display = "block";
      add.style.display = "none";
      cart.innerHTML = "Cart";
    }
  }
});

addToCart.addEventListener("click", () => {
  count = count + 1;
  paragraph.innerHTML = count;
  cart.innerHTML = `Cart ${count}`;
  addToCart.style.display = "none";
  add.style.display = "flex";
});
