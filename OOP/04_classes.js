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
        
    }
 }