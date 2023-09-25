// basic function

function sayHelloTo(name){
    console.log(`Hey! ${name}`); 
}// {} this is scope

sayHelloTo("Atharv"); // only name of the function without () is the referrence of the function and with () is when you use function
 
// Adding two numbers

function addTwoNumbers(number1, number2){ // (Parameters)
    let total = number1+number2;
    console.log(total); // this is just running a function and not returning anything
    return total; // this will return the total value in case if you want to store this in variable
    // After return whatever the code it is, it won't execute
}

addTwoNumbers(5,5); // (arguments) 

const totalSum = addTwoNumbers(5,6); // this function is printing as well as the function is returning and printing as well.
console.log(totalSum);

// another function ex
function loggedUser(username){
    return `Hey ${username} just logged in!`; // this returning a string with string interpolation
}

console.log(loggedUser("Atharv"));
//above example if username is not defined,
function loggedUser(username = "Sam"){ // here we have given username a default value, in case argument is not recieved   
    if (username === undefined || !username) { // here negation represents username not defined. 
        console.log("Please Give Username");
        return; // this statement is to stop executing code there itself
    }
    return `Hey ${username} just logged in!`; // this returning a string with string interpolation
}

console.log(loggedUser());
