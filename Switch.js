
//Task 5.
// input a letter and check it is a vowel or consonent using switch case.

var letter = prompt("Enter the Letter : ");
letter = letter.toLowerCase();
switch(letter){
    case "a" || "e" || "i" || "o" || "u" :
        console.log("Vowel");
        break;
    default :
    console.log("Consonant");
}