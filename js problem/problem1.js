/*...........................
 Create random number depeant on user.
 */
/* const randomMachine = (max = 0, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomMachine(20, 10));
 */
/*.............................
 Array Sort
 ..*/
/* const student = ["Rezwan", "Rahim", "karim", "Al-amin"];
console.log(student.sort()); */

/*..............................
Array sorting Number.
*/
/* const studentRoll = [3, 5, 9, 2, 1, 8, 6, 4];
console.log(
  studentRoll.sort(function (a, b) {
    return a - b;
  })
); */

/*.......................... 
find leapYear
..*/
/* const isLeapYear = (year) => {
  // year % 400 = 0
  // year % 4 = 0 && year % 100 !== 0
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};
console.log(isLeapYear(2026)); */

/*..............................
 find how many vowel in a sentance.
 ..*/
/* const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function checkVowel(sentance) {
  let count = 0;
  const letter = Array.from(sentance);
  letter.forEach(function (value) {
    if (vowel.includes(value)) {
      count++;
    }
  });
  return count;
}
let result = checkVowel(
  "Hello World! This is Rezwan!I belive my self and become a good programmer"
);
console.log(result); */

/*................................
FIND DUPLICATE VALUE IN ANY ARRAY
..*/
/* const element = [4, 5, 6, 5, 76, 45, 4, 6, 5, 7, 5, 7, 45, 75, 7];
let duplicateArry = [];
const duplicate = element.filter(function (value, index, array) {
  if (array.indexOf(value) !== index) {
    duplicateArry.push(value);
  }
});
console.log(duplicateArry); */

/*..............................................
PRATICE ALL PROBLEM AGAIN
...............................................*/
// 1. Write a function that can print any random number between any two given numbers (including them).
/* function generatRandom(max, min) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}
console.log(generatRandom(10, 0)); */

//2. How can you order roll numbers of students in your class sequentially?
/* const studentRoll = [3, 5, 7, 8, 98, 34];
console.log(
  studentRoll.sort(function (a, b) {
    return a - b;
  })
);
 */
//3. How can you order names of students in your class sequentially?
/* const student = ["rahim", "sofiq", "zabbar", "karim", "asif"];
console.log(student.sort());
 */

//4. Write a function that can tell us whether an year is a leap year or not.
/* function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is Leap Year`);
  } else {
    console.log(`${year} is Not Leap Year`);
  }
}
isLeapYear(2026); */

//5. How would you determine the number of vowels in a sentence?
/* const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const checkVowel = (sentence) => {
  let count = 0;
  let updateArray = Array.from(sentence);
  updateArray.forEach(function (value) {
    if (vowel.includes(value)) {
      count++;
    }
  });
  return count;
};
console.log(
  checkVowel(
    "Hello world how are you! This is rezwan! Now i am locat in my home"
  )
);
 */

//6. How would you extract the duplicate numbers in an array?
const numbers = [3, 5, 6, 54, 75, 34, 53, 45, 2, 75, 56, 3];
let newArrayNum = [];
numbers.forEach(function (value, index, array) {
  if (array.indexOf(value) !== index) {
    newArrayNum.push(value);
  }
});
console.log(newArrayNum);
