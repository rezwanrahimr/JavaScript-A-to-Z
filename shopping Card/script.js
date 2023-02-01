// Phone Pluse Btn
document.getElementById("phone-plus").addEventListener("click", function () {
  let phoneQuantity = document.getElementById("phone-quantity");
  let increageQuantity = parseFloat(phoneQuantity.value) + 1;
  phoneQuantity.value = increageQuantity;
});

// Phone Minus Bnt
document.getElementById("phone-minus").addEventListener("click", function () {
  let phoneQuantity = document.getElementById("phone-quantity");
  if (phoneQuantity.value > 0) {
    let increageQuantity = parseFloat(phoneQuantity.value) - 1;
    phoneQuantity.value = increageQuantity;
  }
});
