/*  //1. Write an arrow function that will take 3 parameters, will
multiply the parameters and will return the result. */
/* const arrowFunction = (one, two, three) => one * two * three;
console.log(arrowFunction(2, 2, 2)); */

/* 2. Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */
/* const text = `I am a Web Developer.`;
const text2 = `I love to code.`;
const text3 = `I love to eat Biryani`;

text.concat(text2, text3);

console.log(text); */

/* // 3 . Write an arrow function that will take 2 parameters.
One parameter will come from you and the other parameters:
One parameter will come from you and the other parameter
will be a default parameter. add these two parameters and return
the result. */

/* function defaultFun(one, two = 0) {
  console.log(one + two);
}
defaultFun(1);
 */

/* 
4.Write an arrow function where it will do the following:

a. It will take an array where the array elements will be the
name of your friends.

b. Check if the length of each element is even, push elements
with even length to a new array and return the result */

/* function myFriends(friends) {
  let evenFrd = [];
  for (let friend of friends) {
    if (friend.length % 2 == 0) {
      evenFrd.push(friend);
    }
  }
  return evenFrd;
}
console.log(myFriends(["rezwan", "rahim", "rupak", "hello"]));
 */

/* 5. Write an arrow function where it will do the following:

a. It will take two array inputs
b. Combine the two arrays and assign them in a new array
c. Find the maximum number from the new array and return the result. */

function fun() {
  let newArry = [];
  let arrayOne = [34, 53, 23, 43, 55];
  let arrayTwo = [22, 21, 14, 53, 34];
  let all = arrayOne.concat(arrayTwo);
  newArry.push(all);
  let maximum = Math.max(...all);
  return maximum;
}
console.log(fun());
