// for each one of the property of an array itself

let myArr = [1,2,3,4,5,6,7,8,9];

myArr.forEach(function (item, indesofArray, wholearr){ // this take (value: number, index: number, array: number[can take complete array])
    console.log(`${item} with index of ${indesofArray}, the array is ${wholearr}`);
}); // this takes a callback function and we decide wh at to do with each value of an array callback function is a function without name

// you can give it call back function like
/*
myArr.forEach((item) => {

})
*/

// you can give it function instead of call back

function callback(itme){
    console.log(itme);
}
// not -------- *** Foreach loop only executes function it DOESN'T RETURN ANYTHING It returns undefined

myArr.forEach(callback); // just given the reference of function not whole function 

// iterating through array which has object use case iterating through item list or products

let products = [
    {
        name: "fridge",
        price: "30000",
        brand: "Samsung"
    },
    {
        name: "TV",
        price: "20000",
        brand: "One plus"
    },
    {
        name: "Mobile",
        price: "150000",
        brand: "Apple"
    }

]

products.forEach((item) => {
    console.log(item.name);
});

