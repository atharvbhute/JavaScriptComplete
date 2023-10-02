/*
// Javascript Execution Context
Note* Java Script is a single threaded language
When we give Js file to engine 
Step 1 - Global Execution Context <- This key word goes here and refers to Global execution in browser it's window
step 2 - Functional execution context
// optional.
step 3 - Eval execution context - this comes in when you'll learn mongoos then it will exist, it is also kind of a property of global object

Java script goes through two phases
1. memory creation phase
memory allocation for vatiables and functions
2. Execution phase
Execution of functions happens here
*/
// Code Example

let val1 = 10;
let val2 = 5;

function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10,2);
// Steps are as below
/*
Step 1 : The above code will go to global execution and assign to this keyword

Step 2 : Memory creation phase : 
val1 - undefined
val2 - undefined
addNum - defination a complete function will go here the defination
result1 - undefined
result2 - undefined

Step 3 Execution Phase :
val1 - 10;
val2 - 5
addNum nothing to execute or assign as it is already assigned in defination
result1 - New Execution Context and diffrent whole new Box with (new variable environment + execution thread)
    now execution of function will happen here and everytime we assign function everytime there will be new box
    step 1 - Memeory Allocation
    val1 - undefined
    val2 - undefined
    totla - undefined

    Step 2 - Execution
    num1 - val1(10);
    num2 - val2(5);
    Total = 15; // this is a return value of the function and it is going to global context. means this value will return to result1

    //Imp Note* - This functional execution context get's delete after it's execution
result2 - Again new execution context (new variable environment + execution thread)
    It will be the same process as above. and after it returns result it get's deleted.
*/

// ++++++++++++++++ Call Stack +++++++++++++++++++++++

/*
There is something known as call stack
Step 1 : Global executional context get's there
Step 2 : Functions executes there and get's out of it as the execution is over
    let's say we have 2 functions one after one which needs to be execute

    so first one() will go and come out after execution 
    then two() will go and get's execute and comes out 

    // global execution is still there bcoz it's executing continously 

    // what if we have one function inside another like eg one(){two(){three()}}
    Then one() will go first then two() will go in and then three() will go in stack()
    after execution it will come out in LIFO manner which is last in first out.

*/