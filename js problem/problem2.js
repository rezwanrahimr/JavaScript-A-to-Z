/*................................
FIND THE SPACIFIC WORD IN A PARAGRAPS IN TEL THE FAST POSITION OF THIS WORD.
*/
const sentense =
  "Hello Everyone.This is rezwan rahim.I am a jr web developer.now I study at Dhaka International University in Computer Science & Engineering.rezwan before that I Complete my Diploma deagre in Feni Polytechnic Institute.";

let matchs = sentense.match(/rezwan/gi);
console.log(matchs ? matchs.length : 0);

let search = sentense.search(/toma/i);
console.log(search >= 0 ? search : "Not Found");
