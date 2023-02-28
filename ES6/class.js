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
/* You have an odd array (array with odd numbers)[1,3,5,7,9]
now covert this array into an even array (array with even
numbers)[2,4,6,8,10]. Do this using for loop & array.map()
method. Hints add one to any numbers and it will become an 
even number. */
const arr = [1, 3, 5, 7, 9];
const final = arr.map((x) => x + 1);
console.log(final);
