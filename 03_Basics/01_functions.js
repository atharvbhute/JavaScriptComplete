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

// multiple parameters and multiple arguments
function calculateCartPrice(...items){ //with ...parameterName, we call these three dots a rest operator.
    return items
}

console.log(calculateCartPrice(100,200,366)); // [ 100, 200, 366 ] returned an array

// another way
function anotherCart(item1, item2, ...itemss){
    return itemss;
}

console.log(anotherCart(10,20,30,40,50)); //[ 30, 40, 50 ] as 10 and 20 was assigned to item1 and 2 respectively and the rest values was assigned to an array

// giving object as an argument

let aObject = {
    id : 1,
    name: "Tada"
}

function myFunctionObject(mahObject){
    return mahObject.id;
}

console.log(myFunctionObject(aObject)); // 1

/* we can directly give object directly as a argument myFunctionObject({id: 1})
the only issue is when we don't pass a function in that case we need to check type in that code and that is why people prefer typescript to avoid
That code*/

// passing an Array


let anArray = [1,2,3,4,5,6,7,8,9];

function myFunctionArray(mahArray){
    return mahArray[1];
}

console.log(myFunctionArray(anArray)); // 2

/* we can directly give an array directly as a argument myFunctionArray([1,2,3,4,5,6,7]) */
