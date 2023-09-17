/*
There are 2 Types of Datatypes
1. Premitive
2. Non premetive or Reference type

programming concept, call by value and call by reference, it is about how you store this data in memory and 
how you access this data from memory. 

1 . Premitives are call by value, in this we don't get reference of this values from memory and we get copy of it
and suppose we want to change the value of it, it gets changed in copy.

There are 7 datatypes in it String, Number, Boolean, undefined, Null, bigInt, symbol

2. Non premetive or Reference type - Array, Object, Functions.

// to check each type of use type of and read docs https://tc39.es/ecma262/#sec-typeof-operator
*/

let Null = null;

console.log(typeof Null); // object

let arr = {
    name : "Atharv",
    age : 25
}

console.log(typeof arr);