// loops in js
// for , while and do while
/* 
// continue --< skip current iteration and go to next iteraion
// break  --> stop the exceution of that block (loop)
for (initialization,condition,increment)
{

}

while(condition)
{
    operations
    increment
}

do {

}
while(condition)


*/

let arr6 = [1,2,3,4,5]

arr6.forEach(function(element,index,array){
    console.log(element,index,array)
})

for (let i=0;i< arr6.length; i++)
{
    const element = arr6[i];
    console.log(element)
}

let obj = {
    a :1,
    b : 2,
    c:3,
    d:4
}

for(let key in obj)
{
    console.log(obj[key])
}