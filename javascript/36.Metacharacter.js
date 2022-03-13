// metacharacter symbol , more in regular expression in js
// *******************************************************
// ^ -> means start with eg. /^ra/ -> start with ra
// $ -> means end with eg. /$ja/ --> end with ja
// . -> match any one character
// * ->match any zero or more character
//  ? -? optional match eg /ha?rry?/ a and y is optional
// \* -> exact match with symbol eg /h\&rry/ -->h*rry //exact match
// *******************************************************

var regex = /raja/gi;
var str = "raja is good body and raja is good programmer but raja needs to work on his communication skill, ones raja done with his basic of programming in his desired language and frameworks";
regex = /r.ja/ // -> match any one charcater at dot position
regex = /raja$/
regex = /raja/
var result = regex.exec(str);

console.log(result)
// result = regex.exec(str);
// console.log(result)
// result = regex.exec(str);
// console.log(result)


if(regex.test(str)){
    console.log(`the string "str" match with ${regex}`)
}
else{
    console.log(`the string "str" does not match with regex`)
}