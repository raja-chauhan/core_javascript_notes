console.log("string and it's method");


const name = 'harry';
const greeting = 'good morning';


console.log(name + ' ' + greeting)

var html;
html = '<h1>This is heading</h1>' +
'<p>my para </p>'

html = html.concat('dfsdf')

console.log(html)
console.log(html.length)
console.log(html.toLowerCase())
console.log(html.toUpperCase())
console.log(html[1]) // indexing
console.log(html.indexOf('This')) // indexOf -> 5 and written -1 if not present
console.log(html.lastIndexOf('This')) // lastindexOf -> 5 and written -1 if not present
console.log(html.charAt(3)) // return -> '>'
console.log(html.endsWith('str2')) // return -> '>'
console.log(html.includes('str2')) // return -> '>'
console.log(html.substring(0,3)) // return -> '>'
console.log(html.slice(0,3)) // return -> '>' 
console.log(html.split(' ')) // return -> break string and put into array 
console.log(html.replace('this','it')) // return -> replace this with it

// template literals =============================================================
var mobile = 'mi'
var laptop = 'acer'

var sentence = `My mobile is ${mobile} and laptop is ${laptop} brand`

console.log(sentence)
