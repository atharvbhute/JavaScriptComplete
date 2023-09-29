// this and arrow

let classroom = {
    studentName: null,
    studentCount: 20,
    periods: ["science", "Maths", "English", "PT"],
    _getSudentName: function (name = this.studentName) {
        this.studentName = name; // we use this keyword to reffer current context of code eg. this object and access properties of this object
        console.log(this.studentName);
        // console.log(this);
    },
    get getSudentName() {
        return this._getSudentName;
    },
    set getSudentName(value) {
        this._getSudentName = value;
    },
}

classroom.getSudentName("Atharv"); // prints Atharv // Obvio
console.log(classroom); // studentName: 'Atharv'
classroom.studentName = "Jay"; // here changed the studentName as to check this takes current context
classroom.getSudentName(); // prints Jay

// trying another example with singleton Object

let tennisHall = new Object;
tennisHall.name = "let's play";
tennisHall.getName = function(){
    console.log(this.name);
    // console.log(this);// gives whole function
}

tennisHall.name = "Khelo"
tennisHall.getName(); // results are same

console.log(this); // this gives an empty object and in console of browser gives window object as this is running in node
// this keyword captures whole window in Javascript that is why we can access events of window


// using this in function

function code(){
    let codeName = "Tango"
    console.log(this); // gives hell lot of values and methods
    console.log(this.codeName); // undefined as this doesnt work in functions this works in objects though there are ways to use this in functions
}

code(); 

// arrow functions : Note - as we know as arrow function is holding in variable we can't use it before initilization

let arrowFunc  = () => {
    let firstname = "Arrow"
    console.log(this); // {}
    console.log(this.firstname); // undefined // this keywork doesn't even work in arrow functions

}

arrowFunc(); 

// implicit return when you don't use return keyword

let add  = (one, two) => (one + two); // you can use it without paranthesis like => one + two however if you use paranthesis you can return objects and other datatypes
console.log(add(5,6));


// explicit return
let plus = (one, two) => {
    return one+two;
} // when you use curly braces you need to use return

