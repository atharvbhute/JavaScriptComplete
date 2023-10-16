//+++++++++++++++++++promise +++++++++++++++++++++++++++++++++++
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// simply promise operation represent the task is going to fullfil or not infuture and gives results according to it.

/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

/*
In ES5 there was no promise liabraries and and eventually no fetch and it's functionality but there was a liabrary for 
it known as Q and bluebird, it got famous and in later virsions of javascript adopted them and made part of javascript
*/

// fetch is one kind of promise and that is consuming a promise 

// making/ creating a promise

const promiseOne = new Promise(function(resolve, reject){ // resolve is when promise is completed resolve code runs, 
    //++ Do an Async task
    // DB calls, Cryptography, Network call, api calls , any async calls
    setTimeout(()=>{
        console.log('promise is running');
        resolve(); // we have to pass this method or call this method to connect resolve to use then or finally later and it should be at the end when promised code is completed
        //resolve() runs as a token or signal that promise is completed and gives access to then or finally to write a function
    },1000);
})

promiseOne.finally(()=>{

    console.log('primise is completed');
});

// another way of creating promise just without variable and passing value to then

new Promise(function(resolve,reject){
    setTimeout(() => {
        let add = 2+5;
        const data = {
            name: "Atharv",
            lastname: "bhute",
            email: "atharv@example.com"
        }
        // passing data to use for then or finally.
        resolve(data); // takes only one ragument for more args pass it through array
    }, 1000);
}).then(function(data){
    console.log(data);
});

// resolve and reject

const promisethree = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if (error) {
            let message = "Error: Something went wrong";
            reject(message);
        } else {
            let data = {
                username: "Atharv233",
                password: "11234"
            }
            resolve(data);        
        }
    }, 1000);
});

let name;
promisethree.then((username) => {
     return (username.username);
}).then((username)=>{
    console.log(username);
    name = username; // here assigning and storing response in variable.
}) // in chaining return value from first chain passes to second chain.
.catch((err)=>{
    console.log(err);
}).finally(()=>{ // finally executes in every case
    console.log("promised completed either case");
    console.log(name); // and using that variable data when got it.
})

let pass = promisethree.then((pass) => {
    return pass.password;
});

// promisethree.finally(()=> console.log(pass)); // this code is not running 

setTimeout(() => {
    console.log(pass);// Promise { '11234' } // as it ran after 2 second , 1 second after we got response.
}, 2000); // it's an object so gives response in object value. it's eventually completion or fail object

// console.log(pass); // Promise { <pending> } as the promise is not completed yet and it's yet to run after a second;

// ++++++++++++++++ another aproach using async await ++++++++++++++++
// as .then or catch wait to get work done as same async just wait to get work done and then executes



