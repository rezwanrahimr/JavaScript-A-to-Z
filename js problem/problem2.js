/*................................
FIND THE SPACIFIC WORD IN A PARAGRAPS IN TEL THE FAST POSITION OF THIS WORD.
*/
/* const sentense =
  "Hello Everyone.This is rezwan rahim.I am a jr web developer.now I study at Dhaka International University in Computer Science & Engineering.rezwan before that I Complete my Diploma deagre in Feni Polytechnic Institute.";

let matchs = sentense.match(/rezwan/gi);
console.log(matchs ? matchs.length : 0);

let search = sentense.search(/toma/i);
console.log(search >= 0 ? search : "Not Found"); */

/*.................................
// input:linearsearch(['a','b','c','d','c'],'c')
// output: 2 or 'not found'
// problem: linearSearch() function টি  implement করে দেখান ।
..*/
/* 
function linearSearch(array, value) {
  let length = array.length;
  for (var i = 0; i < length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return "Not Found";
}

console.log(linearSearch(["a", "b", "c", "d", "c"], "c")); */

/*...................................
FIND THE LONGEST ELEMENT IN ANY ARRAY AND RETURN THE INDEX NUMBER THIS ELEMENT
..*/
/* function longest(array) {
  let current = "";
  let length = array.length;
  for (var i = 0; i < length; i++) {
    if (array[i].length > current.length) {
      current = array[i];
    }
  }
  return [current, array.indexOf(current)];
}

console.log(longest(["hello", "how", "areyou"])); */

//// ১-১০০ পযন্ত কোন সংখ্যা গুলো ৩,৫, এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের করুন ।
/* function fizzBuzz(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i, "Fizz");
    } else if (i % 5 === 0) {
      console.log(i, "Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(100);
 */

/*....................................
// array থেকে false value কিভাবে খুজে বের করে বাদ দিতে পারি।
*/
/* const arrayEle = ["hello", undefined, 56, false, "how", null, " ", NaN, true];
console.log(arrayEle.filter(Boolean)); */
