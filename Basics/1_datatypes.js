/*
prefer not to use var because of issue in block scope and functional scope
suppose if you update value in for loop with the same variable name out of the scope, out of scope variable also used to get updated
so prefer not to use var use let and const for constant values.
 */

"use strict"; // using this syntax java script engine or compiler will know that you are using only newer syntax and java script will run according now you can't undo this in your further code, 
// now a days javascript run on strict mode only

//alert("Hello"); // this can be use only in browser as it is DOM function and cannot be run node however there are ways to run it in Node

// make sure your code is readable and don't use unnecesary spacing

//java script onriginal documentation https://tc39.es/ecma262/#sec-intro // ecma script just defined java script standards.
//however mdn documentation is more readable

// "Name" = String // 18 = number => 2^53 is range // true = bool // bigint
// null => it is standalone value or its empty, suppose i don't want zero and i did't get any response so respose is 0 but zero is also a response so will prefer null as no response
// undefined => if you have not defined any value;
// Symbol => uniqueness defines
// object 

console.log(typeof "Atharv");
console.log(typeof null); // output is Object this is sort of flaw of javascript
console.log(typeof(undefined));// this is another way to use typeof as a function //output is undefined // this is deffrent from null this is the flaw of javascript
console.log(typeof String); // output String, it is a function
