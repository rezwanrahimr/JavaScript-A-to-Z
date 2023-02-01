// withdraw
document.getElementById("deposit-btn").addEventListener("click", function () {
  let depositNumber = document.getElementById("deposit-number");
  let getDeposit = depositNumber.value;
  let deposit = (document.getElementById("deposit-value").innerHTML =
    getDeposit);
});
