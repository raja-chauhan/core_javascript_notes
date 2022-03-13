// regular expression in js
/*
Comments ==> //
regular expression ==> /myexpression/
flags in expression
g -> global (see all string)
i -> case insensitivity

    g: matches the pattern multiple times
    i: makes the regex case insensitive
    m: enables multi-line mode. Where ^ and $ match the start and end of the entire string. Without this, multi-line strings match the beginning and end of each line.
    u: enables support for unicode
    s: short for single line, it causes the . to also match new line characters


*/

var reg = /raja/gi

console.log(reg)
console.log(reg.source) // what is condition


var s = "this great raja and Raja is unstopable !!!"

//function to match expression
// 1.exec() -> This function written array for match and null for no match

var result = reg.exec(s);
console.log(result)

 result = reg.exec(s);
console.log(result)

 result = reg.exec(s);
console.log(result)


//2. test() -> return true or false

var result2 = reg.test(s) //true or false
console.log(result2)

//3. compare() -> it will return array of result or null
// var result3 = reg.match(s) // this is wrong
var result3 = s.match(reg) // this is right
console.log(result3)


//4. search() -> return index of first match else -1(if not found)

var result4 = s.search(reg)
console.log(result4)

//5. replace function --> return new string with all the replacement

var result5 = s.replace(reg,'rohan')
console.log(result5)


