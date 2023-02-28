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
/* let data = {
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
 */

//6
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.company.name);
