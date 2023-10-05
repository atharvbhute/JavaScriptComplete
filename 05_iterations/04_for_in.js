//+++++++++++++++++++++++++ for in +++++++++++++++++++++++
//simply for in loop gives you keys

let myObj = {
    name : "Atharv",
    lastname : "Bhute",
    age : 26
}

for (const key in myObj) { // for in loop just gives keys
    console.log(`key: ${key} and the value is ${myObj[key]}`); 
}

// for in for array

let arr = ["Atharv", "Bhute"];

for (const key in arr) {
    console.log(key);
} // this give 0,1

// for in for map
let myMap = new Map(); // map doesn't repeat it's key's and stays in order
myMap.set('name','Atharv');
myMap.set('age','26');
myMap.set('height','5.11');

for (const key in myMap) {
    console.log(key);
} // this simply doesn't execute as map is not iterable 
