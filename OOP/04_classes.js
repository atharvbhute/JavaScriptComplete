class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }// constructor function calls whenever we call this class or create new instance;

    getUserName(){
        console.log(this.username);
    }
} // this is a common class syntax

const userOne = new User("atharv","pass");
userOne.getUserName();

// ++++++++++++++++ without using class keyword or syntactic suger +++++++++++++++++


function CreateUser(username, password) {
    this.username = username;
    this.password = password;
}

CreateUser.prototype.getUserPassword = function() {
    return this.password+234;
}

const userTwo = new CreateUser("John","Password");


// ++++++++++++++++++++ inheritance +++++++++++++++++++++++++++++++++

class createTaskList{
    constructor(task,id){
        this.task = task;
        this.id = id;
    }
}
 class updateTask extends createTaskList{
    constructor(task, id){
        super(task,id);        
    }

    printOne(completed){
        console.log(`${this.task} is ${completed} with id ${this.id}`);
    }
 }

 const newTask = new updateTask("Get Milk", "55");
 newTask.printOne(true);

 // ++++++++++++++++++++ Static +++++++++++++++++++++++++++++++++++++++
 /*
 Static methods are often utility functions, such as functions to create or clone objects, 
 whereas static properties are useful for caches, fixed-configuration, 
 or any other data you don't need to be replicated across instances.
 */

 class makeBeer{
    constructor(flavor){
        this.flavor = flavor    
        this.alcohol = 55;
    }

    brewer(){
        console.log(`your ${this.flavor} flavored beer is in making
        alcohol % = ${this.alcohol}`);
    }

    static hideMe(){
        console.log("actual alcohol % is 100%");
    } // now this function is not available to any instance this is only available to this class invocation,
    // static function is not even accessible within class. 
 
}

 const newBeer = new makeBeer("weet");

newBeer.hideMe(); 

 