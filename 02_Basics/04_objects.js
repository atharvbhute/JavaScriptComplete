const user = new Object(); // declaaring singletom object
// const user = {}; // this is also the same.

const symb1 = Symbol("tata");
user.id = 25486;
user[symb1] = "HAHA";

//giving objects to objects
user.newObject = {
    name : "networkUser",
    networkUser : {
        userName : "Atharv",
        lastName : "Bhute",
        email : "atharv@google.com"
    }
}

console.log(user.newObject.networkUser.userName); // that's how you chain to obect
// console.log(user.newObject?.networkUser.userName); //that's how you can add question mark for optional chaining if doubt that object exist or not. will see usercase later

// Merging Objects 
const obj1 = {a : 1, b : 2}
const obj2 = {c : 3, c : 4}

const obj3 = Object.assign({}, obj1, obj2) //(target{}, ...Source) Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
//if you won't give empty object as a source by default obj2 is just getting into obj1

console.log(obj3); // { a: 1, b: 4, c: 3 } // it is not taking repeated keys ofcourse

// Merging using spread 
const obj4 = {...obj1,...obj2};
console.log(obj4);

// objects in an array mostly you get these kinda data in database use data like that

let arrObj = [
    {
        id : 1,
        name : "atharv",
        lastname : "Bhute"
    },
    {
        id : 2,
        name : "Gayatri",
        lastname : "Bhute"
    }
]

console.log(arrObj[0].id); // accessing objects in array

//storing keys and values in array

let arrKeys = Object.keys(obj1); // accessing keys
console.log(arrKeys);
let arrValues = Object.values(obj1); // accessing values
console.log(arrValues);

// string keys and values in array in array [[key, value], [key, value]];
const enteries = Object.entries(obj1);
console.log(enteries);

// check if that value or key or property is available in that object or not

console.log(obj1.hasOwnProperty('a')); //Determines whether an object has a property with the specified name.

// you can see more properties from chrome console
