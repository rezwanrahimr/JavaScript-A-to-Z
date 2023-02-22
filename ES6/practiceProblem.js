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

function defaultFun(one, two = 0) {
  console.log(one + two);
}
defaultFun(1);
