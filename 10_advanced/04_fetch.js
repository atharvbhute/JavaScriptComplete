// fetch API was not part of the NodeJS before It was only for browsers, however later it became part of node JS
// must read -  https://blog.logrocket.com/fetch-api-node-js/

/*
In 2015, the Fetch API was launched as a modern successor to XMLHttpRequest, 
and it has subsequently become the de facto standard for making asynchronous calls in web applications. 
One significant advantage Fetch has over XMLHttpRequest is that it leverages promises, 
allowing for a simpler and cleaner API while avoiding callback hell. 

it was noted that the browser’s Fetch API implementation is dependent on a browser-based Web Streams API 
and the AbortController interface (for aborting fetch requests), which wasn’t available in Node.js until recently. 
As such, it was difficult to decide on the best approach to include it in Node.js core.

Long before the addition of the Fetch API, the request module was the most popular method for making HTTP requests in Node.
But the JavaScript ecosystem at large quickly evolved, and newly introduced patterns made request obsolete. 
A crucial example here is async/await; there was no provision for this in the request API, 
and the project was later deprecated due to these limitations.

The Fetch API is provided as a high-level function, and in its most basic version, it takes a URL and produces a promise that resolves to the response:
++++++++++++++++++++++++++++++++++++++++++++++++++
fetch("http://example.com/api/endpoint")
  .then((response) => {
    // Do something with response
  })
  .catch(function (err) {
    console.log("Unable to fetch -", err);
  });

*/

// ++++++++++++++++++ imp notes ++++++++++++++++++++++  Read More https://developer.mozilla.org/en-US/docs/Web/API/fetch
// The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
//A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). 
// A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

// fetch is capable of sending anything with the request eg, password ID, Post, GET
/*
etch('https://example.com/', {
  method: 'GET',
  body: new FormData(),
}); 

Documentation which browser reads to impliment fetch https://fetch.spec.whatwg.org/#fetch-method
*/

//+++++++++++++++++++++++++++++++++++++++++++ Execution of Fetch ++++++++++++++++++++++++++++++++++
// fetch implements High priority que, for every async task there is a que but, High priority que is only for fetch 
// even async task needs to get execute quickly fetch won't wait as it in in high priority queue
// it is also known as micro task queue

//++++++++++++++++++++++++++ Core execution of fetch ++++++++++++++++++++++++++
/*
response = fetch('something') -> 1. first task goes to reserver memory in system 
                                    data -> onfulfilled[fn(to give results to data)], onReject[fn(to give results to Data)]
                                    and eventually data goes to globle memory in response
                                    *** Data, onfulfilled, onReject is not available to us as these are the private variable                          
                             
                              -> 2. now browser or node env shoots network request if request is successful
                                    -> successful network request gives data or response from server to onFulfilled[] even it 404 error as request has been sent from browser
                                    -> failure gives data or error to onReject[].
*/

// let's try to make fetch usin promise and Xhr

// const fetchData = function(link){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET",link);

//     return new Promise(function(resolve, reject){
//         xhr.onreadystatechange = function(){
//             if (xhr.readyState == 4) {
//                 resolve(this.responseText);
//             } else {
//                 let message;
//                 switch (xhr.readyState) {
//                     case 0: message = "Client has been created. open() not called yet."
//                         break;

//                     case 1: message = "open() has been called"
//                         break;   

//                     case 2: message = "send() has been called, and headers and status are available."
//                         break; 
                    
//                     case 3: message = "Downloading; responseText holds partial data."
//                         break;

//                     case 4: message = "The operation is complete."
//                         break;
                
//                     default: message = "mau"
//                         break;
//                 }
//                 reject(`ERR : ${message}`);
//             }
//         }
//     xhr.send();

//     })
// }

// fetchData('https://randomuser.me/api/')
// .then((response)=> JSON.parse(response))
// .then((data)=> console.log(data))
// .catch((err) => console.log(err));

// above code failed giving error XMLHttpRequest is not defined
// trying same this with dummy request to check if logic is right

function fetchData(data){
    let respnseText;

        if (!data) {
            respnseText = 'Error'
        } else {
            respnseText = data
        }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (respnseText == data) {
                resolve(respnseText)  
            } else {
                reject(respnseText);
            }            
        }, 1000);
    })
}

fetchData({name: "Atharv", lastname: "Bhute"})
.then((respnse)=>{console.log(respnse)})