let cart = [];

let tableDetail = document.getElementById("table-detail");
let checkout = document.getElementById("checkout");
let grandTotal = document.getElementById("grand-total");

const cartFromLocalStorage = localStorage.getItem("cart");
cart = JSON.parse(cartFromLocalStorage);

let totalCost = 0;

for (let item of cart) {
  let checkoutDetails = `
      <tr>
        <td>
          <img
            src="${item.url}"
            alt="food image"
            class="checkout-img"
          />
        </td>
        <td>${item.name.charAt(0).toUpperCase() + item.name.slice(1)}</td>
        <td>₹ ${item.price}</td>
        <td>${item.count}</td>
        <td>${item.price * item.count}</td>
      </tr>
  `;

  tableDetail.innerHTML += checkoutDetails;
  totalCost = totalCost + item.price * item.count;
}

grandTotal.innerHTML = totalCost;

checkout.addEventListener("click", () => {
  cart = [];
  localStorage.removeItem("cart");
  window.location = "./index.html";
});
