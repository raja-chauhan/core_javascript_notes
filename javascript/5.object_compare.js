import _ from "lodash";

console.log('object compare')

let obj1 ={ a:23,b:5,c:56,d:45,e:34 }
let obj2 = { a:23,b:5,c:56,e:34,d:45 }


console.log(_.isEqual(obj1,obj2))