// array specific loops

// ++++++++++++++++++++++++++++++++++ for of +++++++++++++++++++++++++++++

let arr = [1,2,3,4,5,6,8]

for (const val of arr) {
    // console.log(val);
}

// for of on string // usecase : ignore space saperate by space alot of it.
let name = "Atharv"
for (const iterator of name) {
    // console.log(iterator);    
}

// for of on map

let myMap = new Map(); // map doesn't repeat it's key's and stays in order
myMap.set('name','Atharv');
myMap.set('age','26');
myMap.set('height','5.11');

console.log(myMap);

for (const ma of myMap) { //it is just giving every key value pair in saperate arrays
    console.log(ma);
}

for (const [key, val] of myMap) { // correct way to saperate it as to destructure it
    console.log(key , '->', val);
}

// for of loop doesn't work for objects