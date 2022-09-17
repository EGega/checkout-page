const plusBtn = document.querySelectorAll(".plus");
const minusBtn = document.querySelectorAll(".minus");
const removeBtn = document.querySelectorAll(".remove");
const salePrice = document.querySelectorAll(".orange-span");
const originalPrice = document.querySelectorAll(".overline");
const cartItem = document.querySelectorAll(".cart-item");
const number = document.querySelectorAll(".number")

// ALT Selectorlar
const subTotal = document.querySelector("subtotal")
const vat = document.getElementById("vat")
const shipping = document.getElementById("shipping")
const sumPrice = document.getElementById("sum-price")

// RemoveBtn Function

removeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
     btn.parentElement.parentElement.remove()
  });
});


console.log(vat.innerText);

    


