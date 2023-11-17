/*
Yes, JavaScript does have a mechanism that is often referred to as "classes." 
However, it's important to note that JavaScript's class system is syntactic sugar over 
its existing prototype-based inheritance system. Underneath, 
JavaScript still uses prototypes for inheritance, but classes provide a more familiar 
and convenient syntax for those coming from class-based languages.
 */

// OOP - there is style of programming one is class based another is function based.

// Objects - collection of methods(functions) and properties(variables/constants);

// use of OOP - makes service based in propgramming, functional programming makes spegatti code 
// so after OOP the code was more readable

// +++++++ parts of oop+++++++++
// object literal
// constructor function
// prototype
// classes
// Instances (new, this)

//+++++++++++ 4 pillars ++++++++++++
// Abstraction -- Hiding details as in we don't know the internal working of that function eg. fetch
// Encapsulation -- wrapping that function and giving limited accessibility to use that function outside
// Inheritance -- prototype
// polymorphism -- many faces or many disguises, it gives power to use same method functions of class in many ways with instances.

const car = {
    brand : "BMW",
    color : "Red",
    number : "MH14BN1997",
    drive : function () {
        console.log(this.wheels + " Wheels Rolling"); // this referes to this object
    }
}

// console.log(this); // {} this is the output

// whenever we write new keyword it is actually a constructor function
// we use new to keyword to make multiple intances of same object leteral.

// const promiseOne = new Promise();

function user(username, loggedInCount) {
    username = username // now this line is confusion which username is to use in the scope
    // also this is the common practice to use the same name.
    this.username = username;
    this.loggedInCount = loggedInCount; // this is how we can do it. 
    
    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    } // this is method/ callback whatever you call
    
    return this; // returns whole object and username and loggedInCount going into that object. 
    // without return this if we want to use this function we have to use new keyword to make new object 
    // and copy of this object. as 
}

console.log(user('Atharv',5)); // prints whole object from node.

const userOne = user("Sam", 6);
console.log(userOne); // prints the same object with above values

const userTwo = user("John", 12);
console.log(userOne); // userOne also prints overwritten values of user.  // undefined if we don't return this. 

// we use new keyword to not get values over written and create whole new instance of that object.
// that is why promises and data alway use new key word to get new instance of those functionalities

// constructor function always gives you new copy of that function. 

const userThree = new user("doe", 52); // 
const userFour = new user('Alexa', 15); // here abstraction and encapsulation working as defination

console.log(userThree); // now it will print given values only. // user { username: 'doe', loggedInCount: 52 }
console.log(userFour); // as this has it's own copy of that function; // user { username: 'Alexa', loggedInCount: 15 }

userFour.greetings(); // this says welcome Alexa which is user 4; // here abstraction and encapsulation working as defination

// without returning this in above function, using new keyword values getting copied to new object.

// few notes on new keyword
/*
step 1 . new keyword creates new object.
step 2 . it calls constructor function. and wraps all arguments inside it.
step 3 . all aguments get's injected into this keyword.
step 4 . you get new function.
*/

// constructor
console.log(userFour.constructor); // [Function: user] // it is nothing but the reference to self to build self ? whenever use new keyword

// making use of instance of to check whether new object is instance of object

console.log(userFour instanceof user); // true



