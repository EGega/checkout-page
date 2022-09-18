const plusBtn = document.querySelectorAll(".plus");
const minusBtn = document.querySelectorAll(".minus");
const removeBtn = document.querySelectorAll(".remove");
const salePrice = document.querySelectorAll(".orange-span");
const originalPrice = document.querySelectorAll(".overline-span");
const cartItem = document.querySelectorAll(".cart-item");
const number = document.querySelectorAll(".number")
const pTotal = document.querySelectorAll(".p-total")

// ALT Selectorlar
const subTotal = document.querySelector("#subtotal")
const vat = document.getElementById("vat")
const shipping = document.getElementById("shipping")
const overAllTotal = document.getElementById("sum-price")

// RemoveBtn Function

removeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
     btn.parentElement.parentElement.remove()
  });
});



let totalArr = []
let vatNum = null;
let subTotalNum = null
let totalOverall = null

plusBtn.forEach((btn, i) => {
  // Artan Değer
  let saleNum = Number(salePrice[i].innerHTML);
  const saleNumCopy = saleNum
  let orgNum = Number(originalPrice[i].innerHTML);
  const orgCopy = orgNum
  
  let totalP = pTotal[i].innerHTML;
  let totalPcopy = totalP;

  // Event
  btn.addEventListener("click", () => {
    number[i].innerHTML = (parseInt(number[i].innerHTML) + 1);
    saleNum += saleNumCopy
    salePrice[i].innerHTML = saleNum.toFixed(2)
    orgNum += orgCopy
    originalPrice[i].innerHTML = orgNum.toFixed(2)

    // Total
   
    totalP = `${saleNum.toFixed(2)}`
    pTotal[i].innerHTML = saleNum.toFixed(2)
    totalArr.push((Number(totalP).toFixed(2)))
    console.log(totalArr);

    // Subtotal 
    subTotalNum = totalArr.map((str) => Number(str)).reduce((acc, el) => acc + el).toFixed(2)
    subTotal.innerHTML = subTotalNum;

    // Vat

    vatNum = subTotalNum * 0.18;
    vat.innerHTML = vatNum.toFixed();
    // OverallTotal
    totalOverall = (Number(subTotalNum) + vatNum + 19);
    console.log(totalOverall);
    overAllTotal.innerHTML = totalOverall.toFixed(2);
  })
})


    


