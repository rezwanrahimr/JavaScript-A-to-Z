// do while loop.
var number = 20;
console.log("number", number);
do{
    number ++;
    if(number == 25){
        console.log("number is skip : ", number);
        continue;
    }
    console.log(number);
} while(number < 30){
    console.log(number);
}

// while loop.
while(number > 15){
    number --;
    if(number == 17){
        console.log(number + "is break");
        break;
    }
    console.log("while loop : ",number);
}