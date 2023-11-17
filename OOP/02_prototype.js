// Javascript has a prototypal bahviour means Javascript sort of never give up until it finds null value
// everything is comming out of prototype class, new, this. 

/* in an array you will get prototype - array and like your methods foreach, filter, and other methods and at 
and at the end you will get object level prototype and into that you'll get constructor and all and at the end you'll get
getters and setters to set prototype after further down it's endless. 
*/

// Everything is Java script is an Object
// string/ array/function -> Object -> null = so whatever property Object has string or Array has the same property 

// examples
function addThree(num) {
    this.num = num;
    // return this
}

addThree.adder = 5; // this is actually not adding adder in addThree Object/ function

console.log(addThree(5)); // 8
console.log(addThree.adder); // 5
console.log(addThree.prototype); // {} gives an empty object this empty object is reserved for functional scop variable
// which are stored in function using this.

addThree.prototype.printNum = function (){
    console.log(this.num+3);
} // now here using prototype we are adding a new function to addThree
// to access this we don't need to write prototype again


new addThree(8).printNum(); // without new keyword added function with prototype won't work basically it is added but
// new keyword attaches that function to another function 

const tenPlusThree = new addThree(10);
tenPlusThree.printNum();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor 
function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. If no explicit return value is specified from the constructor, 
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/

//+++++++++++++++++++++++++ Inheritance and adding own properties or methods to Objects/strings and arrays.+++++++++++



