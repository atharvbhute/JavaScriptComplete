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

console.log(a); // giving error 
console.log(b); // not giving error and simply printing value i.e, 20; even in global scope value is 300
console.log(c); // giving error
