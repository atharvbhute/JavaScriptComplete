// this section is about Object manipulation in depth.

// const PI = Math.PI;

console.log(Object.getOwnPropertyDescriptor(Math,"PI")); 
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const myObject = {
    name : "Atharv"
}

// console.log(Object.getOwnPropertyDescriptor(myObject,"name"));

Object.defineProperty(myObject,"name",{
    writable: false,
    enumerable: false // means you can't run loop on this
});

console.log(Object.getOwnPropertyDescriptor(myObject,"name")); 
/*
{
  value: 'Atharv',
  writable: false,
  enumerable: false,
  configurable: true
}

*/

// above is the example of controlling object methods or properties internally and giving access to what.
// there are few properties which are hardcode and set to false which can stop our code to work
// so we need to to set it true or false according to the project/ App/ Product requirement.


