// the whole code file is global scope

var b = 20;
let a = 500;

if (true) {
    let a = 10;
    var b = 20;
    const c = 30;
    console.log(a); // 10 as it is printing in block despite of global scope value is 500;

    // this is block scope
}

// console.log(a); // giving error 
console.log(b); // not giving error and simply printing value i.e, 20; even in global scope value is 300
// console.log(c); // giving error

function one(){
    let user = "Atharv"
    function two(){
        let admin = "admin";
        console.log(user); // this is accesible for two as one is global scope for two.
    }
    // console.log(admin); // this admin is not accesible for one as we are out of scope of two.
    two(); // executing two out of two in function one. 
}

one();

///++++++++++++++++++++++++++++ interesting / Hoisting +++++++++++++++++++++++++++++++

login("atharv123"); // this wil get execute though it is before function declaration

function login(username){
    return username;
}

getUser("6656") // this won't get execute as we have store this function in variable and variable. this way it's not accessible. 

let getUser = function(userId){ // this variable also called expression.
    return userId;
}


