let name = "Atharv";
let age = "26";

console.log(name + "'s age is " + age); // this is how you concatinate string using variable in it however this is the old way

// to concatinate string in modern way you should use string interpolation

console.log(`${name}'s age is ${age}`); // using backticks and injecting variables you can do string interpolation
// in this you can easily use a method or array index in curly braces

//other string manupulation

let firstName = "Atharv"; 
console.log(firstName.length); //this is one way to manupulate string

//if we want to manupulate string in more precise way

let lastName = new String("Bhute"); // here we are using new instance of String object
console.log(lastName); 
/*
output is string object however this gives us many string functions with protype and 
this stores every character with unique key value pair where keys are sort of indexes and gives us lengh as well
*/

console.log(lastName.__proto__); // this will give us empty object {} however this contains many functions
console.log(lastName.indexOf('h')); // here we are using direct function or proprty or method from prototype, not everytime we use to give __proto__.indexOf
//however above example didn't changed original string as it was stored stack but this is the function or object we are giving it must be stores in heap? research on it

console.log(lastName.charAt(4)); 

/*
like this we have many methods in string to learn more about it you can direct go to console and see methods and to learn more visit mdn docs 
Go through all string methods or write article about it so that you will remember it and will be usefull during interviews
*/
//few more methods
console.log(lastName.substring(0,3)); // so here it is not counting last character of 4 index remember it as if it is counting index 0 as 1 you can't use negitive values in subString()
// in .slice method you can give nigetive values as well as (-2, 4) // this will start counting from behind
console.log(lastName.slice(-3,4));// here 4 is from starting index and -3 is from behind (<-, ->) like this

let fullName = "    Atharv Bhute   "// suppose user gave name or email or any values with spaces
console.log(fullName.trim()); // this removes starting and end spaces// read documentation for more trim usage and function

let URL = "www.atharvbhute.com/home%page"; // lets change this url
let newURL = URL.replace('home%page', "about-us"); // (value to replace, replacement); // usecase in frontend and backend

console.log(newURL); 

console.log(URL.includes("Gayatri")); //this method gives if that word is available in string or not// output is false

let newName = "Gayatri Pravin Bhute";
let newSplitedString = newName.split(' ')// arg will be saperator// this gives us saperated string in an Array
console.log(newSplitedString); // ['Gayatri','Pravin','Bhute'];
