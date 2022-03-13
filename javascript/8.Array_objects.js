// Array
let marks = [1,2,3,4,5,6]
const fruits = ['acsd','dsd','sds','sds']

const mixed = ['str',34,[2,3]]

const arr = new Array(23,123,21,'orange')

console.log(arr.length)
console.log(Array.isArray(arr))

console.log(fruits)
console.log(mixed)

arr[0] = 'something'

let ele = arr[0]

console.log(ele)


let value = marks.indexOf(3)
console.log(value)

// mutating array -> remember it's changing original array
marks.push(34) //ending
marks.unshift(1009) // starting
marks.pop() // remove last element
marks.shift() // remove first element

marks.splice(0,2) // remove element from location , how many to remove
marks.reverse()  // reverse the array
var marks2 = [1,2,3,4]

console.log('marks',marks)
console.log(marks2)

marks = marks.concat(marks2)

console.log(marks)


// object start from here =====================================================

let myobj = {
    name : 'some',
    channel : 'thing',
    isActive : true,
    marks3 : [1,2,3,4,5] 
}

console.log('myobj ',myobj['marks3'])
console.log('myobj ',myobj.marks3)




