// as .then or catch wait to get work done in promise as same async just wait to get work done and then executes


// async function runPromiseThree(){ // this executes as soon as the promise is completed like this code written just after promise
//     try {
//         const serverData = await promisethree;
//         console.log(`this is async await ${serverData.username}`);
        
//     } catch (error) {
//         console.log("error");        
//     }
// } // if the promise throws error then we need to write async await in try catch

// runPromiseThree();

//+++++++++++++ new promise ++++++++++++++++++
// failed attemp
// const newPromise = new Promise(function(resolve, reject){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://randomuser.me/api/");
//     xhr.send();
//     xhr.onreadystatechange = function(){
//         if (xhr.readyState == 4) {
//             resolve(this.responseText)
//         } else {
//             reject("ERROR : Fetch fail")
//         }
//     }
// });

// newPromise.then((response)=>{
//     console.log(response);
// })

// ++++++++++++++++++++++++++++++++ new promise +++++++++++++++++++++++++

const newPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if (error) {
            reject('Error');   
        } else {
            resolve({user : 'name'});         
        }
    }, 1000);
});

// handling promise instead of then catch // using async

async function myAsync(){ // this async function as just async function
    try {
        let myResponse = await newPromise; // await keyword waits till that action happens or that async code executes
        console.log(myResponse);
    } catch (error) {
        console.log(error);
    }
}

myAsync();

// using fetch

async function getRandomUser(){
    try {
        const response = await fetch("https://randomuser.me/api/"); // await to get a response
        const data = await response.json(); // await to convert respnse to json
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getRandomUser();
