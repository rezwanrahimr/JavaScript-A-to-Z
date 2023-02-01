// Phone Pluse Btn
document.getElementById("phone-plus").addEventListener("click", function () {
  let phoneQuantity = document.getElementById("phone-quantity");
  let increageQuantity = parseFloat(phoneQuantity.value) + 1;
  phoneQuantity.value = increageQuantity;
  let phonePrice = document.getElementById("phone-price");
  let calculatingPrice = parseInt(phonePrice.innerText) + 1000;
  phonePrice.innerHTML = calculatingPrice;
  subTotal();
});

// Phone Minus Bnt
document.getElementById("phone-minus").addEventListener("click", function () {
  let phoneQuantity = document.getElementById("phone-quantity");
  if (phoneQuantity.value > 1) {
    let increageQuantity = parseFloat(phoneQuantity.value) - 1;
    phoneQuantity.value = increageQuantity;
    let phonePrice = document.getElementById("phone-price");
    let calculatingPrice = parseInt(phonePrice.innerText) - 1000;
    phonePrice.innerHTML = calculatingPrice;
    subTotal();
  }
});

// Phone Cover plus
document
  .getElementById("phone-cover-Plus")
  .addEventListener("click", function () {
    let phoneCoverQuantity = document.getElementById("phone-cover-quantity");
    let increaseCoverQuantity = parseInt(phoneCoverQuantity.value) + 1;
    phoneCoverQuantity.value = increaseCoverQuantity;

    let phoneCoverPrice = document.getElementById("phone-cover-price");
    phoneCoverPrice.innerText = parseInt(phoneCoverPrice.innerText) + 350;
    subTotal();
  });

// Phone Cover Minus
document
  .getElementById("phone-cover-minus")
  .addEventListener("click", function () {
    let phoneCoverQuantity = document.getElementById("phone-cover-quantity");
    if (phoneCoverQuantity.value > 1) {
      let increaseCoverQuantity = parseInt(phoneCoverQuantity.value) - 1;
      phoneCoverQuantity.value = increaseCoverQuantity;

      let phoneCoverPrice = document.getElementById("phone-cover-price");
      phoneCoverPrice.innerText = parseInt(phoneCoverPrice.innerText) - 350;
      subTotal();
    }
  });

// sub total
function subTotal() {
  let subTotal = document.getElementById("sub-total");
  let phoneCoverPrice = document.getElementById("phone-cover-price");
  let phonePrice = document.getElementById("phone-price");

  subTotal.innerHTML =
    parseInt(phoneCoverPrice.innerHTML) + parseInt(phonePrice.innerHTML);
  // tax
  let tax = document.getElementById("tax");
  tax.innerHTML = Math.floor(parseInt(subTotal.innerHTML) * 0.001);
}
