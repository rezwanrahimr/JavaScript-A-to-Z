// Deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  let depositNumber = document.getElementById("deposit-number");
  let getDeposit = depositNumber.value;
  let deposit = document.getElementById("deposit-value");
  deposit.innerHTML = getDeposit;

  // balance
  let balance = document.getElementById("balance-value");
  let withdraw = document.getElementById("withdraw-value");
  balance.innerHTML =
    parseFloat(deposit.innerText) - parseFloat(withdraw.innerText);
});

// withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  let withdrawNumber = document.getElementById("withdraw-number");
  let getWithdraw = withdrawNumber.value;
  let withdraw = document.getElementById("withdraw-value");
  withdraw.innerHTML = getWithdraw;
  let balance = document.getElementById("balance-value");
  balance.innerHTML =
    parseFloat(balance.innerText) - parseFloat(withdraw.innerText);
});
