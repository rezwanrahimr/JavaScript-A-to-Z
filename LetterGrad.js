
// Task 4.
var marks = prompt("Enter your marks : ");


if(marks > 80 && marks < 100){
    document.write("A +");
   
}
else if(marks > 70 && marks < 79){
    document.write("A");
}
else if(marks > 60 && marks < 69){
    document.write("A-");
}
else if(marks > 50 && marks < 59){
    document.write("B");
}
else if(marks > 40 && marks < 49){
    document.write("B-");
}
else if(marks > 33 && marks < 39){
    document.write("D");
}
else if(marks < 33){
    document.write("Fail");
}
else{
        alert("Enter vaild marks");
}


// Comparision 3 numbers.
var numberOne = prompt("enter first number: ");
var numberTwo = prompt("enter second number: ");
var numberThree = prompt("enter thard number: ");
if(numberOne > numberTwo && numberOne > numberThree){
    document.write("Number One is Bigger" + numberOne);

}
else if(numberTwo > numberOne && numberTwo > numberThree){
    document.write("Number Two is Bigger" + numberTwo);
}
else{
    document.write("Number Three is Bigger: " + numberThree)
}