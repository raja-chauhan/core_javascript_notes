// dom -> document object model
// window object complete R&D

// note -> first complete the tutorial playlist then come back to complete this
// this can be really really useful data .

// 1.alert
window.alert('your message');

// 2.atob and btoa
let text = "Hello World!";
let encoded = window.btoa(text); // SGVsbG8gV29ybGQh
let decoded = window.atob(encoded); // Hello World!


// 3. blur() and focus()

// The blur() method removes focus from a window.
// The focus() method sets focus to a window.
const myWindow = window.open("", "", "width=200, height=100");
myWindow.blur();

//4. caches: CacheStorage


