// when you assume it's a true value then it's a thruthy value
// eg

let userEmail = "atharv@google.com";

if (userEmail) {
    console.log("User Logged In");
}else{
    console.log("Not logged In");
}

// In above example I have not given any true or false value but code just assumed it is true value
// suppose it is empty string code detects it's a false string and output will be : Not Looged In

//========== Falsy Values =====================
/*
false, 0, -0, bigInt 0n, "", null, undefined, Nan
*/

//Other values are truthy values However there are few surprising truthy values
//============Some truthy values===============
/*
"0", 'false'," ", [],{}, function(){}
*/

// checking if array is empty
let arr = [];
if (arr.length === 0) {
    console.log("Array is empty");
}

// checking if object is empty
let obj = {}

if (Object.keys(obj).length === 0) { // here it is converting keys to to array and checking it's length
    console.log("Object is empty");
}

// 0 == '' output = true
// false == '' = true
// false == 0 = true

// nullish coalescing operator (??): work for null and undefined
// eg

let a;
// a = 5 ?? 10; // a will take 5 as it is both value is not null nor undefined so it takes first value;
// a = undefined ?? 10 // now 10 will go as a
// a = 10 ?? null // 10 will go
// a = null ?? 10 ?? 15 // suppose in secong value only it returns something now it will take that second value only.

console.log(a); 

// Terniary operator - small version of if else
// condition ? true : false ;

let name = "atharv"

name == "atharv" ? console.log("it's true") : console.log('false'); // it's true

