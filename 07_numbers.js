let score = 100; // this is normal way to define number 

// to declare or use number in more precise way

let newScore = new Number(100); // now as strings this gives us more control over numbers 

console.log(newScore.toFixed(2)); //this property gives us 100.00 in 2 decimal points 
console.log(newScore.toString()); // this gives us string to numbers

let preNumber = new Number(100.25) //number to be precise

console.log(preNumber.toPrecision(4)); // this method gives you numbers like how many digits you want from number however
// the above argument should now be less than 3 as it should be atleast number of digits before decimal

//toLocalString

let hundreds = new Number(10000000);
console.log(hundreds.toLocaleString('en-IN')); // to give commas as per indian values // 1,00,00,000 // by default its.. US Standard

// learn about MIN and MAX Values

/*******************************************MATHS*******************************************/

//console.log(Math); //in Node it won't give that many results but in browser it will give many functions to look at

console.log(Math.abs(-4)); // gives abosilute value like negetive will be positive, positive will be positive only
console.log(Math.round(4.4)); // output 4 // round up the number if 4.5 output is 5
console.log(Math.ceil(4.1)); // output 5 // if it's even very lil above 4 it will go to 5
console.log(Math.floor(4.9)); // output 4 // takes floot value
console.log(Math.min(4,5,6,7,8,9,8,95,3,)); //takes array and gives min value
console.log(Math.max(4,5,6,7,8,9,8,95,3,)); //takes array and gives max value
console.log(Math.random()); // random always gives random values between 0 and 1

// to get radom number between 1 to 9 
console.log(Math.floor((Math.random() * 10) + 1)); // here we multiplied by 10 to not get value below 1 only as it gives only values between 0 to 1
// Above added 1 to not get 0 and if it get's 0 then it will be 1 by default

// Get value between min and maximum number.

const MIN = 5;
const MAX = 20;

console.log(Math.floor(Math.random() * (MAX - MIN + 1)) + MIN); // MAX - MIN so it will automatically multiply untill min value

/* breakdown for above formula
1. random function giving value between 0 to 1 not 0 or 1
2. it get's multiplied by Max - Min + 1  = 16
ex. random = 0.12 then 0.12 * 16 = 1.92 
3. now 1.92 get's floor to 1
4. then min get's added then it's 6

eg2. random = 0.99 * 16 = 15.55 + 5 = 20.55
floor is 20 
it gives value in exact range

it's confusing.. above is just working of formula

Logic..

(MAX - MIN + 1) - this is setting the maximum number which random can give which sets to always minus to min number
when random gives number which is below min, we are just adding min value to it and eventually we adding that minimum again to
max value we got for random.
*/





