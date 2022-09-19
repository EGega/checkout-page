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
const loader = document.querySelector(".loader")

const rightContainer = document.querySelector(".right-container");
const closeTheCard = document.querySelector(".close-card")
const mainContainer = document.querySelector(".main-container")

// RemoveBtn Function



window.addEventListener('load',() => {
 setTimeout(()=> {
loader.style.display = "none"
mainContainer.style.display  = "block"
 }, 500)
})



let totalArr = [];
let newTotal = [];
let initialSalesArr = [];
let saleNumCopy = null;
let saleNumBackUp = null
let saleNumArr = [];
let orgCopy = null;
let orgArr = [];
let vatNum = null;
let subTotalNum = null
let totalOverall = null

closeTheCard.addEventListener("click", () => {
  rightContainer.style.display = "none"
})

removeBtn.forEach((btn, i) => {
  let saleNum = Number(salePrice[i].innerHTML);
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.remove()
  // subtotal
  subTotalNum = subTotalNum - Number(salePrice[i].innerHTML)
          
    
          subTotal.innerHTML = subTotalNum.toFixed(2);

    // Vat

    vatNum = subTotalNum * 0.18;
    vat.innerHTML = vatNum.toFixed(2);
    // OverallTotal
    totalOverall = (Number(subTotalNum) + vatNum + 19);
    console.log(totalOverall);
    overAllTotal.innerHTML = totalOverall.toFixed(2);
    console.log(subTotal.innerHTML === -0.00);
    if(subTotal.innerHTML === "-0.00") {
      vat.innerHTML = 0;
      overAllTotal.innerHTML = 0;
      shipping.innerHTML = 0;
    }
   
  });
  
});






plusBtn.forEach((btn, i) => {
  // Artan Değer
  let saleNum = Number(salePrice[i].innerHTML);
  saleNumCopy = saleNum
  initialSalesArr.push(saleNum)
  console.log(initialSalesArr);
  let orgNum = Number(originalPrice[i].innerHTML);
  orgCopy = orgNum
  
  let totalP = pTotal[i].innerHTML;

  // subtotal
  subTotalNum = initialSalesArr.reduce((acc, add) => acc + add)
  subTotal.innerHTML = subTotalNum
  console.log(subTotalNum);
  
  

  // Event
  btn.addEventListener("click", () => {
    number[i].innerHTML = Number(number[i].innerHTML) + 1;
    saleNum += saleNumCopy
    salePrice[i].innerHTML = saleNum.toFixed(2)
    saleNumArr.push(saleNum)
    saleNumBackUp = saleNum
    orgNum += orgCopy
    originalPrice[i].innerHTML = orgNum.toFixed(2)
    orgArr.push(orgNum)

    // Total
   
    totalP = `${saleNum.toFixed(2)}`
    console.log(newTotal);
    pTotal[i].innerHTML = saleNum.toFixed(2)
    
    totalArr.push((Number(totalP).toFixed(2)))
    console.log(totalArr);

    // Subtotal 
    subTotalNum = subTotalNum + saleNumCopy
    console.log(subTotalNum);
    // subTotalNum = totalArr.map((str) => Number(str)).reduce((acc, el) => acc + el).toFixed(2)
    subTotal.innerHTML = subTotalNum.toFixed(2);

    // Vat

    vatNum = subTotalNum * 0.18;
    vat.innerHTML = vatNum.toFixed(2);
    // OverallTotal
    totalOverall = (Number(subTotalNum) + vatNum + 19);
    console.log(totalOverall);
    overAllTotal.innerHTML = totalOverall.toFixed(2);
  })
})


    

minusBtn.forEach((btn, i) => {
  // Artan Değer
  let saleNum = Number(salePrice[i].innerHTML);
  let orgNum = Number(originalPrice[i].innerHTML);
  let totalP = pTotal[i].innerHTML;
  

  // Event
  btn.addEventListener("click", () => {
    number[i].innerHTML = Number(number[i].innerHTML) - 1;

    if(saleNumArr.length === 0 || number[i].innerHTML == "0") {
          btn.parentElement.parentElement.parentElement.parentElement.remove()

          subTotalNum = subTotalNum - saleNum
          console.log(subTotalNum);
    
          subTotal.innerHTML = subTotalNum.toFixed(2);

    // Vat

    vatNum = subTotalNum * 0.18;
    vat.innerHTML = vatNum.toFixed(2);
    // OverallTotal
    totalOverall = (Number(subTotalNum) + vatNum + 19);
    console.log(totalOverall);
    overAllTotal.innerHTML = totalOverall.toFixed(2);

    if(subTotal.innerHTML === "-0.00") {
      vat.innerHTML = 0;
      overAllTotal.innerHTML = 0;
      shipping.innerHTML = 0;
    }
          
    } 
    else {
      saleNum = saleNumArr[saleNumArr.length - 1] - saleNumCopy;
      saleNumArr.push(saleNum)
      saleNumBackUp = saleNum
      salePrice[i].innerHTML = saleNum.toFixed(2)
      orgNum = orgArr[orgArr.length - 1] - orgCopy;
      orgArr.push(orgNum)
      originalPrice[i].innerHTML = orgNum.toFixed(2)
  
      // Total
     
      
      pTotal[i].innerHTML = saleNum.toFixed(2)
      totalArr.push((Number(saleNum).toFixed(2)))
      console.log(totalArr);
      
      subTotalNum = subTotalNum - saleNumCopy
    console.log(subTotalNum);
  
    subTotal.innerHTML = subTotalNum.toFixed(2);

    // Vat

    vatNum = subTotalNum * 0.18;
    vat.innerHTML = vatNum.toFixed(2);
    // OverallTotal
    totalOverall = (Number(subTotalNum) + vatNum + 19);
    console.log(totalOverall);
    overAllTotal.innerHTML = totalOverall.toFixed(2);
    }

    
  })
})




    

    

