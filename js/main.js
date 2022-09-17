const plusBtn = document.querySelectorAll(".plus");
const minusBtn = document.querySelectorAll(".minus");
const removeBtn = document.querySelectorAll(".remove");
const salePrice = document.querySelectorAll(".orange-span");
const originalPrice = document.querySelectorAll(".overline-span");
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



// Ekleme 
// const doubleAdd = () => {
//   salePrice.forEach((sale) => {
//     sale.innerText = "Hello";
//   })
// }
// let saleNum = nu 

// plusBtn.forEach((btn, index) => {

//   btn.addEventListener("click", () => {
//       number[index].innerHTML = (parseInt(number[index].innerHTML) + 1);
       
//       saleNum = parseFloat(salePrice[index].innerHTML)

//       salePrice[index].innerHTML = (parseFloat(salePrice[index].innerHTML) + saleNum).toFixed(2);

//       originalPrice[index].innerHTML = (parseFloat(originalPrice[index].innerHTML) + parseFloat(originalPrice[index].innerHTML)).toFixed(2);
//   })
// }
// )



plusBtn.forEach((btn, i) => {
  let saleNum = Number(salePrice[i].innerHTML);
  const saleNumCopy = saleNum
  let orgNum = Number(originalPrice[i].innerHTML);
  const orgCopy = orgNum
  btn.addEventListener("click", () => {
    number[i].innerHTML = (parseInt(number[i].innerHTML) + 1);
    saleNum += saleNumCopy
    salePrice[i].innerHTML = saleNum
    orgNum += orgCopy
    originalPrice[i].innerHTML = orgNum
  })
})
    

// plusBtn.forEach((btn, index) => {
//   btn.addEventListener("click", () => (plusButtonHandler(index)))
// }
// )

// const plusButtonHandler = (index) => {
//   saleNumber = parseFloat(salePrice[index].innerHTML);
//   originaNumber = parseFloat(originalPrice[index].innerHTML);
//   number[index].innerHTML = (parseInt(number[index].innerHTML) + 1);
//   salePrice[index].innerHTML = (parseFloat(salePrice[index].innerHTML) + saleNumber).toFixed(2);
//   originalPrice[index].innerHTML = (parseFloat(originalPrice[index].innerHTML) + originaNumber).toFixed(2);
// }

