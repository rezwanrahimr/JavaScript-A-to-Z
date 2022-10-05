
var rahim = new Object(
   {
       name:'tor name ki'
   }
);
var karim = {
    name:'karim',
    age : '21',
    address : 'dhaka',
    allName:['rahim,karim','zabbar']
}

karim.student = 'yes'
karim.student = 'NO'
karim.welcomeMessage = function(){
    console.log("wellcome to javascript");
}

// console.log(karim)
// console.log(rahim.name)
// karim.welcomeMessage();
for(item in karim){
    console.log(item);
}

console.log(karim.allName[1]);


const array = [
    'kahini',
    {
        name:'rupak',
        age:'21'
    },
    'valo lage na'
]

console.log(array[1].name)