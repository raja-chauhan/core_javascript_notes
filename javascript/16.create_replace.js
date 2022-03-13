/* 
create replace and remove element

*/

// create li element using js
let element = document.createElement('li');

// add a class to element
element.className = 'name of class'
element.id = 'myid'
element.setAttribute('title','mytiitle')

// append element
let ul = document.querySelector('ul.this')
ul.appendChild(element)
console.log(ui)

// replace element ================================================================
let elem2 = document.createElement('h3'); 
elem2.className = 'elem2';
elem2.id = 'elem2'
elem2.setAttribute('title','my title')

// firstelement.replace(secondelement)

// check existing attribute
// let pr = elem2.hasAttribute('class')
// return tru or false
