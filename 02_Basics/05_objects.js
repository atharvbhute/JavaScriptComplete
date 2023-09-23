// Object de-structure

const empData = {
    id: 20354,
    name: "Atharv",
    lastname: "Bhute"
}

// now everytime we can't write empData.id for this follow below

let {id} = empData;
//id = 666666; // here I've used it as a variable basically it stores it in valriable let id = empData.id
// another way
let {id: empID} = empData; // here now we have renamed it and can use it as a empID;

console.log(id);

//using object de-structure in react for example 
// const navbar = ({company}) = {

// }
// navbar(company = "credence");
// you can de-structure arrays as well but usecase is very rare will learn that as well.

// API's = it's all about getting values from backend and presenting them in front end. algorithm and all is backend work we only order values

// {
//     "name" : "Atharv",
//     "contact" : "9922745939",
//     "isLoggedIn" : true
// } // this a syntax for API

// now you know object so you can easily use api and json to convert data in object and easily represent it
// You can get API's in Array format which contains objects

// to get sample JSON https://randomuser.me/
// to beutifu JSON and simplify it to understand. https://jsonformatter.org/
