// Iterator in js

const myArray = ['Apple', 'Grapes', 'Orange', 'Lemon'];

console.log(myArray)

function fruitsIterator(values) {
    var nextIndex = 0;
    // return object
    return {
        next : function(){
            if (nextIndex < values.length)
            {
                // return object
                return {
                    values:values[nextIndex++],
                    done:false
                }
            }
            else{
                // return object
                return{
                    done:true
                }
            }
        }
    }
}

var final =  fruitsIterator(myArray)
for (i in myArray){

    console.log(final.next())
    // console.log(final.next())
}