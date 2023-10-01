// to avoid variable pilution from globle scope.. that is why we use iife (immedietely invoked functions expression)

// Syntax (function code)()// immediate execution.

(function sayName(name){
    // named iife
    console.log(`Hey! ${name}`);
})("Atharv");

// note : if you don't add semi colun after iife then the function don't know where to stop execution and it will throw error
// So always try to invoke function and end with semi colun; TypeError: (intermediate value)(...) is not a function
// this is how you can execute two iife

(()=> {
    // unnamed iife
    console.log("Hello");
})();

