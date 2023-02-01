document.getElementById("phone-plus").addEventListener("click", function () {
  let phoneQuantity = document.getElementById("phone-quantity");
  let increageQuantity = parseFloat(phoneQuantity.value) + 1;
  phoneQuantity.value = increageQuantity;
});
