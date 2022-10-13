
// constructor
function Constructor(name,position) {
    this.name = name;
    this.position = position; 

    this.display = function(){
        console.log(this.name);
        console.log(this.position);
    }
}

var ceo = new Constructor('rezwan','CEO');
ceo.display();
