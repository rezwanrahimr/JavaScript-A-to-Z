/*
how may oparator in javaScript !
There are five type of oparator in javaScript.
1. aratic matic oparator. + - * / % ++ --
2. assignment oparator. += -= /= %=  =
3. comparision oparator. == === !== 
4. logical oparator . && || ! 
5. ternary oparator . ? :
*/

var numberOne = prompt("Enter First Number !");
var numberTwo = prompt("Enter Second Number !");
var numberThree = prompt("Enter Thard Number !");

var comparision = numberOne > numberTwo && numberOne > numberThree ? console.log('Number One is Bigger : ' , numberOne)  :   numberTwo > numberOne && numberTwo > numberThree ? console.log('Number Two is Bigger', numberTwo) : console.log('Number Three is Bigger',numberThree);
