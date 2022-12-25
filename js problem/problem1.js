// Create random number depeant on user.
const randomMachine = (max = 0, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomMachine(20, 10));

// Array Sort
const student = ["Rezwan", "Rahim", "karim", "Al-amin"];
console.log(student.sort());

// Array sorting Number.
const studentRoll = [3, 5, 9, 2, 1, 8, 6, 4];
console.log(
  studentRoll.sort(function (a, b) {
    return a - b;
  })
);

// find leapYear
const isLeapYear = (year) => {
  // year % 400 = 0
  // year % 4 = 0 && year % 100 !== 0
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};
console.log(isLeapYear(2026));
