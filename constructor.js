// Constructor.
function Constructor(name,age,roll){
    this.name = name;
    this.age = age;
    this.roll = roll;

    // decler a normal fuction in constructor.
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
    }
}
var man1 = new Constructor('rezwan',23,1);
var man2 = new Constructor('rahim',25,2);

man1.display();
man2.display();
