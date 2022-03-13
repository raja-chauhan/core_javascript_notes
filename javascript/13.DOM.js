// dom have tree structure

console.log('DOM tuts')

let a = document;

a = document.all;
console.log(a)

b = document.body;
console.log(b)

let f = document.forms;
console.log(f)

Array.from(a).forEach(function(element){
    console.log(element)
})

// get all links from page 

let mylinks = document.links;
let mylinks2 = document.links[0].href;

// document.images and document.script
// get all images and script on current page

