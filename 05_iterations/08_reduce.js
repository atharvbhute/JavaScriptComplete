// reduce is simply adding array
// usecase : adding shopping cart

let numbers = [1,2,3,4,5,6,7,8,9];

const total = numbers.reduce(
    (acc, currVal) => {
        // console.log(`acc - ${acc} and currVal - ${currVal}`);
        return acc+currVal; // you have to return accumalator + current value every time cause this function executes everytime and added value get's return
} ,5); 

console.log(`Total of above array is ${total}`);

/*
Output : 
acc - 5 and currVal - 1
acc - 6 and currVal - 2
acc - 8 and currVal - 3
acc - 11 and currVal - 4
acc - 15 and currVal - 5
acc - 20 and currVal - 6
acc - 26 and currVal - 7
acc - 33 and currVal - 8
acc - 41 and currVal - 9
Total of above array is 50
*/

/*
This method or function takes two arguements (callback function, initialValue)
1. callback function takes 2 parameters (accumulator , current value)
    accumulator is which accumulates currect value and keeps getting bigger
2. initial value which value you want to give to accumulator first or it works as a addon value as well   
   but from 2nd time the sum value get's into accumulator
*/

// practical example

let products = [
    {
        name : "mobile",
        price : "15000"
    },
    {
        name : "TV",
        price : "50000"
    },
    {
        name : "Bed",
        price : "7000"
    }
];



let productsTotal = products.reduce((acc, product) => {
    let price = Number(product.price);
    return acc + price;
},0);

console.log(productsTotal);
















