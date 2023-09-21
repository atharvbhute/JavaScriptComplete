let names = ["Atharv", "Gayatri", "Devangi"];
let lastnames = ["Bhute", "Mane"];

console.log(names); //[ 'Atharv', 'Gayatri', 'Devangi' ]
let aaa = names+lastnames; // this becomes string
console.log(typeof aaa);// Atharv,Gayatri,DevangiBhute,Mane// if we simply add 2 arrays it becomes string.

//to add two arrays as arrays
let conArr = names.concat(lastnames); // it joints 2 arrays
console.log(conArr);

//push method only add one as a single value in another array ["atharv",["Bhute"]];// like this
// push method adds in existing array but concat method gives you new array

//Adding arrays using spread method,

let spreadArr = [...names,...lastnames];
console.log(spreadArr);

// in concat you need to use concat again and again. in spead you can just add as many as you can after coma.

//flat
let newArray = [1,2,3,5,[6,4],[5,6,[5,6,8,9,10]]] // this is 3 levels of array
console.log(newArray.flat(Infinity)); // by default it solves 1 level of array need to give the levels so we given infinity to solve it on given levels

console.log(Array.isArray(newArray)); // gives true or false 
console.log(Array.from("Atharv")); // return an array from every given string. ['A','t','h','a','r','v']; // takes objects and all
//but for objects we need to tell it make array out of keys or value

//using Array of

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ] // add it in an array

/*
Pro Tip: Learn more about isArray, of, from
*/
