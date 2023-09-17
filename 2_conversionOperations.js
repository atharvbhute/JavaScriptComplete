let age = "26"; // We want to convert this string into number as values can be given in strings may be in fuctions 

console.log(typeof age);

// to convert a string into number use Number function

let ageInNumber = Number(age); // we can use String as well in such a way
console.log(typeof ageInNumber);
console.log(ageInNumber);

// Let's say we want to convert alphanumeric values or value = "25ABC"

let value = "26APB";
let convertedValue = Number(value); // using string function converted alphanumeric values

console.log(typeof convertedValue); // output will be number 
console.log(convertedValue); // output will be NaN

/*
Nan is Not A Number if you convert value of null it will be 0, still java script converted it to Nan and datatype is number
That's the flaw if Javascript it will do stuff but not in a very restrictive manner that is why people use TypeScript
- undefined will be converted to Nan
- boollean will be converted to 0 or 1
- normal string is NaN
*/

// boolean

let isUserLoggein = 0;
let boolUser = Boolean(isUserLoggein); // this will convert to bool

console.log(boolUser); // true ; 0 => False, "" => false empty string will be false again and complete string is true
// any number which is not Zero is true;

// To String

let user = true;
let stringUser = String(user);

console.log(stringUser); // output is as thought it's true

// ************* Operations ********************

console.log("1" + 2); // output 12 as JS converted 2 into string
console.log("1" + 2 + 3); // output 123 as JS converted 2 and 3 into string as 1 is a string and on first place
console.log(1 + "2" + 3);// output 123 as it printed 1 as a number first then 2 is a string and Jave script might have converted 3 in string beacause 2 is a string
console.log(1 + 2 + "3"); // 33  as it added 1 and 2 and then printed 3 saperately

// tricky conversion no one uses #badCode

console.log(+true); // this will be converted as a 1;
console.log(+""); // this will be converted as a 0;

// prefix and postfix ++a , a++; Read MDN Docs for it of increamental operator

//Links to study
/* 
https://tc39.es/ecma262/#sec-type-conversion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
 */

