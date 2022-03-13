// prototype in js

// object literal : object
let obj = {
    name : 'myname',
    age : 'number'
}

console.log(obj)

function MyDetails(name, job, yearOfBirth){    
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}
console.log(MyDetails.prototype)

console.log("This is tutorial 28");

// Object literal : Object.prototype


function Obj(givenName){
    this.name = givenName
}
// add new function in prototype of object
Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("Rohan Das");
console.log(obj2);
 