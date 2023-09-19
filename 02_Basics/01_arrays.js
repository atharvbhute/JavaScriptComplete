// collection of multiple items of diffrent datatypes
// Arrays are resizable we can add more things in an Array.

//MDN Referrence points https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// when you copy an array they make shallow copies means both copies shares same reference points like storing in heap form

const arr = [5,2,2,5,6,8,8,5,2,2,5,4]; // declaring array
const arr2 = new Array(3,5,5,5); // this is also declaring array

arr.push(5) // adding values in an array
arr.pop()// removing last index value in array
arr.unshift(5)// adds at the start of the list
arr.shift()// delete 0th index value

console.log(arr.includes(5)); // returns true or false// checks if that value is include in array or not
console.log(arr.indexOf(2)); // gives index of that value

arr.join() //this method joins values of array and make a string out of it.

//slice and splice

let mna = [0,1,2,3,4,5,6,7,8,9];

console.log(mna.slice(2,3)); // [2]// range index 2 to index <-3 (index, index);
console.log("a", mna);// slice didn't manipulated an array

console.log(mna.splice(2,3)); // (starting index, how many values after that index);
console.log("b", mna); //[3, 4, 5, 6,7, 8, 9] // here it actually deleted data // this is the main feature of splice ** vv important

