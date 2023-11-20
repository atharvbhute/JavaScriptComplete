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
console.log(addThree.prototype);


new addThree(8).printNum(); // without new keyword added function with prototype won't work basically it is added but
// new keyword attaches that function to another function 


const tenPlusThree = new addThree(10);
tenPlusThree.printNum();

console.log(addThree.prototype);

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

// inhertiance 

const user = {
    username : "Atharv",
    password: "*******"
}

const profile = {
    Email : "atharv@gmail.com",
    avatar : "asdfad.jpg",
    // __proto__: user // by doing this you can use properties of user in profile
    // this is to setting inheritance in Object for classes it's call or .prototype
}

// profile.__proto__ = user; // setting proto outside of an Object 

console.log(profile.username);

// another way of using inheritance in modern way

Object.setPrototypeOf(user, profile); // (Inheritance, Main object);
//this is to setting inheritance in Object for classes it's call or .prototype

console.log(user.Email);

// Adding out own property to inbuild object
// string, Array, functions are objects at the end it goes throught object and object goes to null
// string/ Array/ Function -> Object -> null 

const table = {
    color : "brown",
    shape : "round"
}

Object.prototype.printColor = function(){
    console.log(`color of the table is ${this.color}`); // this is like whoever call this method it will response to that context
}

Object.prototype.sayHello  = function() {
    console.log(`Hello ${this}`);    
}

table.printColor() // now table doesn't have printColor() method.
const mahArray = [1,2,3,"Atharv"];

mahArray.sayHello(); // Hello 1,2,3,Atharv // Now say Hello property was added to Object however it was 
// we can use this in array as well as mentioned earlier string, function, arrays goes from Object only
// however if we add property or method in array/function/string // we can't use that in object


//++++ making own string function ++++++++++

String.prototype.getRealLenght = function(){
    let strLen = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] != " ") {
            strLen++;            
        }      
    } // without using trim().lenght
    return strLen;
}

console.log("Atharv    ".getRealLenght()); 

//++++++++++++ shadowing ++++++++++++
// what if our own method already exist in object as buildin 

const name = "Atharv";
String.prototype.length = function(){
    let strLen = 0;
    for (let i = 0; i < Infinity; i++) {
        if (this[i]) {
            strLen++;
        }else{
            break;
        }
    }
    console.log(strLen);
}



//+++++++++ playing more with prototype +++++++++++++++++++++

function createUser(username, password) {
    this.username = username;
    this.password = password;

    this.credentials = {
        userID : this.username,
        pass : this.password
    }
    
    // return this.credentials;
}

createUser.prototype.getCredential = function(){
        // const userValues = this.credentials
        return this;
}

createUser.prototype.deleteUSer = function(){
    // console.log(this.username);
    return this;
}

const newUser = new createUser("Atharv", "Bhute");

newUser.getCredential().deleteUSer();

newUser.deleteUSer().getCredential();

// this is good for passing values or filter in any order through chaninng 
// here I am just playing with prototype and it's amazing but somehow I am only able to return this but now spacific value :(








