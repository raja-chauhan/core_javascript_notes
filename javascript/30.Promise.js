// promise in js --> 
// *** it has 3 states
// promise --> resolve(complete) or reject(failed) or pending(not completeed yet)

// *************** it is used as a substitute of call back function

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("your promise has been resolved")
                resolve()
            }
            else {
                console.log("your promise has been rejected")
                resolve('sorry not fulfilled')
            }
        }, 1000)
    })

}
//if resolve call next function or task to do
func1().then(function () {
    console.log('thank for resolving')

}).catch(function (error) {
    console.log('you promise rejected 23'+error)

})