import products from "./data.js";

let productsDiv = document.getElementById("products");
let cart = document.getElementById("cart");

let cartCount = 0;
let cartItems = [];

for (let product of products) {
  let cards = `
      <div class="container">
        <div>
          <img src="${product.url}" alt="food-products-img"/>
          <p class="content product">${
            product.name.charAt(0).toUpperCase() + product.name.slice(1)
          }</p>
          <p class="content price">₹ ${product.price}</p>
        </div>
        <div class="card">
          <div class="count" id="${product.name}-block">
            <button id="${product.name}-minus-btn" class="btn">-</button>
            <p id="${product.name}-count">0</p>
            <button id="${product.name}-plus-btn" class="btn">+</button>
          </div>
          <button class="btn addToCart-btn" id="${
            product.name
          }-addtocart">Add to cart</button>
        </div>
      </div>
    `;

  productsDiv.innerHTML += cards;
}

for (let product of products) {
  let productCount = 0;

  let count = document.getElementById(`${product.name}-count`);
  let plusBtn = document.getElementById(`${product.name}-plus-btn`);
  let minusBtn = document.getElementById(`${product.name}-minus-btn`);
  let addToCart = document.getElementById(`${product.name}-addtocart`);
  let block = document.getElementById(`${product.name}-block`);

  window.addEventListener("load", () => {
    block.style.display = "none";
    cart.innerHtml = "Cart";
  });

  addToCart.addEventListener("click", () => {
    cartCount = cartCount + 1;
    productCount = productCount + 1;
    count.innerHTML = productCount;
    cart.innerHTML = `Cart ${cartCount}`;
    addToCart.style.display = "none";
    block.style.display = "flex";
    cartItems.push({ ...product, count: productCount });
  });

  plusBtn.addEventListener("click", () => {
    cartCount = cartCount + 1;
    productCount = productCount + 1;
    count.innerHTML = productCount;
    cart.innerHTML = `Cart ${cartCount}`;
    const newCartItems = cartItems.filter((p) => p.id !== product.id);
    newCartItems.push({ ...product, count: productCount });
    cartItems = newCartItems;
  });

  minusBtn.addEventListener("click", () => {
    if (productCount > 0) {
      cartCount = cartCount - 1;
      productCount = productCount - 1;
      count.innerHTML = productCount;
      cart.innerHTML = `Cart ${cartCount}`;
      const newCartItems = cartItems.filter((p) => p.id !== product.id);
      newCartItems.push({ ...product, count: productCount });
      cartItems = newCartItems;

      if (productCount === 0) {
        addToCart.style.display = "block";
        block.style.display = "none";
        cartItems = cartItems.filter((p) => p.id !== product.id);
      }
    }

    cart.innerHTML = `Cart ${cartCount > 0 ? cartCount : ""}`;
  });
}

cart.addEventListener("click", () => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
  window.location = "./checkout.html";
});
