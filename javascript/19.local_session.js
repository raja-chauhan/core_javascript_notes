/*
Local and session storage(clear when you close the tab)
every website have it's own local storage

session store expire on close of browser but in local storage it will not affect

*/

// save in the local storage
window.localStorage.setItem('name','raja')


// get from local storage
let name = window.localStorage.getItem('name')
console.log(name)

// clear localstorage
window.localStorage.clear()

// clear perticular key

window.localStorage.removeItem('keyname')


// convert to string (array)
JSON.stringify(var_name)

// reverse (array)
JSON.parse(var_name)

// =================== session storage ==================================

sessionStorage.setItem('key','value')
sessionStorage.getItem('key')
sessionStorage.clear()

// use ctrl+shift+r -> to clear cache