// classes and inheritence in javascript
// class is blueprint

class Employee {
    constructor(given_name, given_experience, given_division) {

        this.name = given_name;
        this.experience = given_experience;
        this.division = given_division;
    }

    slogan() {
        return `I am ${this.name} this company is best`
    }

    joiningYear() {
        return 2022 - this.experience

    }

    //static method (can be use without create object of class)
    static add(a, b) {
        return a + b;
    }
}

//create object
let harry = new Employee('harry', 4, 'IT')

console.log(harry.slogan())
console.log(harry.joiningYear())
console.log(Employee.add(34, 45))

// ========================= Inheritence ======================================

class Programmer extends Employee {
    // run when object is created
    constructor(given_name, given_experience, given_division, given_language) {
        // 
        super(given_name, given_experience, given_division)
        this.language = given_language;
        this.github = 'github';
    }

    faviorateLanguage() {
        if (this.language == 'python') {
            return 'python'
        }
        else {
            return 'javascript'
        }
    }

    static multiply(a,b){
        return a*b
    }

}

let rohan = new Programmer('rohan',3,'TECH','python')
// console.log('rohan =',rohan)
console.log('rohan =',rohan.faviorateLanguage())
console.log('rohan =',Programmer.multiply(1,2))


// w3school using get(getter method) and set(setter method) keyword
class Car {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }
  
  let myCar = new Car("Ford");
  
  document.getElementById("demo").innerHTML = myCar.carname;