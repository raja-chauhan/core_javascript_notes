// object oriented programming in js


// object literal for creating object
// let car = {
//     name: 'maruti 900',
//     topSpeed: 220,
//     run: function run() {
//         console.log("car is running")
//     }
// }


// console.log(car)
// car.run()

// constructor --> it's a template which can be used to create objects
// eg let today = new Date()

console.log("This is tut 27");

// Object Literal for creating objects
// let car = {
//   name: "Maruti 800",
//   topSpeed: 89,
//   run: function() {
//     console.log("car is running");
//   }
// };
// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function() {
    console.log(`${this.name} Is Running`);
  };
  this.analyze = function() {
    console.log(
      `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
    );
  };
}
let car1 = new GeneralCar("Nissan", 180);
let car2 = new GeneralCar("Marutu Alto", 80);
let car3 = new GeneralCar("Mercedes", 200);
// console.log(car1, car2, car3);
console.log(car1.name)

 