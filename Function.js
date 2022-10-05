// function statment.
function newFunciton (){
    // 
}

// function expression.
var demon = function(a,b){
    var sum = a + b;
    return sum;
}

var result = demon(2,2);
console.log(result);


// IIFE (Immediately Invoked Function Expression)
(function IIFE(){
    console.log('Hello IIFE');
})();