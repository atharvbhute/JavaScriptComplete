// call and the story of execution context
/* let's say there is a function outside and you need to execute that function in another 
function and execute/ get values from that function.

Note : the problem here is when we call function inside function in call stack that inner function gets 
executed and as soon as the execution context is over that sandbox also get's deleted with that value 
and it is never able to get or pass to the outer function and it also cannot reffer to out function's This.
*/

function setPassword(pass){
    this.pass = pass;
    console.log("password has been set");
    console.log(this);
}

function createUser(username, password) {
    this.username = username;
    setPassword(password);    // this will just call above function but will never set password in this context
    setPassword(this.password); // this is doing the same

    setPassword.call(this, password); // worked // createUser { username: 'atharv@google.com', pass: '123456' }
    //basically in above example we ara giving/ passing this execution context to that function and as 
    // function is using out this is setting password to given argument.

    // setPassword(this,password) // this also not works, ofcourse as it is passing current object/ function as argument but call is making it all attached.
}

const newUser = new createUser("atharv@google.com","123456");

console.log(newUser); 

/*  Output : 
password has been set
createUser { username: 'atharv@google.com' }
*/