/* class Instractor {
  name;
  position;
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  tagLine() {
    console.log(`try to the best!`);
  }
}

const amir = new Instractor("amir", "js developer");
console.log(amir);
console.log(amir.tagLine());
 */

// pretace problme
//1
/* You have an odd array (array with odd numbers)[1,3,5,7,9]
now covert this array into an even array (array with even
numbers)[2,4,6,8,10]. Do this using for loop & array.map()
method. Hints add one to any numbers and it will become an 
even number. */
/* const arr = [1, 3, 5, 7, 9];
const final = arr.map((x) => x + 1);
console.log(final); */

//2
/* You are given an array say: [33,50,79,78,90,101,30].
Now return/get all the elements which are divisible by 10
using array.filter()method. */
/* const newArr = [33, 50, 79, 78, 90, 101, 30];
let newArr2 = [];
const final = newArr.filter((x) => {
  if (x / 10) {
    newArr2.push(x);
  }
});
console.log(newArr2);
 */

//3
/* You have an array [1,9,17,22]. add the all elements of this
array and given output. Do this usign for loop & array.reduce() method. */
/* const array = [1, 9, 17, 22];
let newArr = array.reduce((pre, current, index, elements) => {
  return pre + current;
});
console.log(newArr); */

//4
/* practice problme ReadableStreamDefaultController() */

// 5
let data = {
  location: [
    {
      latitude: "34.5 , 37.8",
      longitude: "98.77, 58.7",
      city: "Hyderabad",
      country: "India",
    },
  ],
};
console.log(data.location[0].city);
