// manipulates every item of array

let numbers = [1,2,3,4,5,6,7,8,9];

let addednum = numbers.map((num) => num + 1); // we can do the same with for each but again logic and making array is the thing it's a readymade function

console.log(addednum);

// chaining

let chainedNum = numbers.map( (num) => num+5 ).
                         map( (num) => num*2 ).
                         filter( (num) => num > 15 ); 

// in chaining first function pass on that array to another chain and function bcoz every function here return an array                        

console.log(chainedNum);                         

