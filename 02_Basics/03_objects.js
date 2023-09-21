// singleton : when you create object from constructor and this is the only object of it's kind
// if you create object in other way you can create multiple intances of it
/* Note* when you create object in literal way then it has multiple instances */

//singletone
//Object.create

// literal way
let myObject = {
    name: "Atharv", // you can give any datatype here even function,array or another object
    "Email ID": "atharv.bhute18@gmail.com", // 
    lastname: "Bhute",
    age: 23
}; // you can define keys and value of name;

// accessing values from object

console.log(myObject.age); // usual way
console.log(myObject["age"]); // correct way or good practice
console.log(myObject["Email ID"]); // [] notation is the only way to access this kinda keys at the end *keys are strings only*

// using symbol as a key 

let mySym = Symbol("Key1");

let obj2 = {
    mySym: "MySymII", // you can access this and get value by obj.mySym or obj["MySym"] but this will treat this Key as a string not Symbol
    [mySym]: "MySymIII" // this is the right way to use symbol as a key
}

console.log(obj2["mySym"]); 
console.log(obj2[mySym]); // Right Way

// Right way will help you in interview question.

// update object
myObject.name = "Gayatri";
console.log(myObject);

//if you want to not change or update object in future you can feeze the object

Object.freeze(myObject);
myObject.name = "Atharv" // this change won't apply
console.log(myObject);// this is giving name as Gayatri only
