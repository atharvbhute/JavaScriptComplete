/*
Getter : A getter is a method that is used to retrieve the value of a property. 
It allows you to define the process of accessing the value of a property. 
You define a getter using the get keyword followed by the property name.
(Getter manipulates read functionality of the property)
*/

/*
Setter : A setter is a method that is used to set the value of a property. 
It allows you to define the process of assigning a value to a property. 
You define a setter using the set keyword followed by the property name.
(Setter manupulates write functionality of the property)
*/

class createUser{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    get password(){ //
        return this._password.substring(0, this._password.length - 6);
    }

    set password(value){
        console.log("it is set");
        this._password = value+'123456'; // this will go to database encrypted
    }

    // names of get and set functions are same as variables which we want to set or get method for *this is important when we use setter and getter in class syntax
    // we used _password or _username is not get this constructor confused. otherwise it will throw error 
    // as constructor and setter are both trying to set values and call stack will get overflow
    // if we don't mention getter or setter constructor by default create functions get and set.
}

const newUser = new createUser('username','pass');
console.log(newUser.password);

// ++++++++++++++++++++ Doing same in classical way without class ++++++++++++++++++++++++++++
function CreateAdmin(username, password) {
    // Set initial properties directly on the instance
    this.username = username;
    
    // Define a private property for password using let
    this._password = password;

    // Define getter and setter for 'password'
    Object.defineProperty(this, 'password', { // usually defineProperty creates new property
        get: function () {
            return this._password;
        },
        set: function (value) {
            console.log("called"); // this is to check if it is called while setting parameters
            this._password = value + '123456'; // This will go to the database encrypted
        }
    });
}

const newAdmin = new CreateAdmin("Atharv", "Passasdfsdfasdfw");
//The _password property is set to the provided password value without using the setter. 
//At this point, the setter is not invoked because it's a direct assignment. 


console.log(newAdmin.password); // Outputs: Passasdfsdfasdfw

/*he setter for the password property takes an argument only when you 
explicitly set the password property using the assignment operator, */

// Set a new value using the setter
newAdmin.password = "NewPassword"; // when we set the property at this time only the setter was called

console.log(newAdmin.password); // Outputs: NewPassword123456

//The getter and setter are used when you access or modify the password property after the object has been created.


//++++++++++++++++++++++++++++ Object based getter and setters +++++++++++++++++++++++++

const myObject = {
    _name : "Atharv",
    _age : "26",

    get anyName(){
        return this._name;
    },
    set anyName(value){
        this._name = value + ' Bhute'
    },
}

// here as well setter methods invoke when you set a new value explicitely

console.log(myObject.anyName); 
myObject.anyName = "Atharv"; 
console.log(myObject.anyName);

/* in above example it doesn't matter the name of the function what matter's is 
which value it is manupulating while getting or setting like storing to memory or while getting from memory */

//+++++++++++++ imp note : naming matter in example of class ++++++++++++

