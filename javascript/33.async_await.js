// Async await
// `use strict`
function myfunction(){
    console.log("inside function")
    const response = fetch('https://api.github.com/users')
    // const users = await response.json();
    return response;
}

console.log("before calling")
var name = myfunction()
console.log("after calling")
console.log(name)