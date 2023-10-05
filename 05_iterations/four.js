//+++++++++++++++++++++++++ for in +++++++++++++++++++++++

let myObj = {
    name : "Atharv",
    lastname : "Bhute",
    age : 26
}

for (const key in myObj) { // for in loop just gives keys
    console.log(`key: ${key} and the value is ${myObj[key]}`); 
}