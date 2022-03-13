// Symbols in js (used to make unique keys)
// kind of primitive data types

const sym1 = Symbol('My identifier')
const sym2 = Symbol('My identifier')
// const sym1 = new Symbol('My identifier') // give an error

console.log("symbol is ",sym1)
console.log("symbol is ",sym2)
console.log("symbol is ",sym2 == sym1)

const a = "My identifier"
const b = "My identifier"
console.log("symbol is ",a == b)



