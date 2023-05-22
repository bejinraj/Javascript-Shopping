let count = 0;
const paragraph = document.getElementById("num");
let incBtn = document.getElementById("plus-btn");
let decBtn = document.getElementById("minus-btn");
let addToCart = document.getElementById("addtocart");
let add = document.getElementById("count");

add.style.display = "none";

incBtn.addEventListener("click", () => {
  count = count + 1;
  paragraph.innerHTML = count;
});

decBtn.addEventListener("click", () => {
  if (count > 0) {
    count = count - 1;
    paragraph.innerHTML = count;
    if (count === 0) {
      addToCart.style.display = "block";
      add.style.display = "none";
    }
  }
});

addToCart.addEventListener("click", () => {
  count = count + 1;
  paragraph.innerHTML = count;
  addToCart.style.display = "none";
  add.style.display = "flex";
});