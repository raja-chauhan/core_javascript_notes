// dates in javascript
// to track what action done by user in which time and date interval

let today = new Date()
console.log(today)
console.log(typeof today)

let otherDate = new Date('8-4-2003 04:54:08')
otherDate = new Date('june 12 1986')
otherDate = new Date('12/06/1998') // mm/dd/yy
console.log(otherDate)

console.clear()
//get day of date
let a =otherDate.getDay()
console.log(a)

//getDate()
//getMinutes()
//getHours()
//getSeconds()

//getTime()
//getMiliseconds()
//getMonth()


//setDate()
//setMonth()
//setFullYear()


// 0 for sunday , 1 for monday and so on
