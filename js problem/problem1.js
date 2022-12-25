// take random number depeant on user.
const randomMachine = (max = 0, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomMachine(20, 10));
// 20 - 10 = 10 + 1 = 11 + 10 = 20
