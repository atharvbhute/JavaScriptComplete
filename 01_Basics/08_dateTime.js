// Date object always returns a date in milliseconds from January 1, 1970 UTC (the epoch) 

// refer this https://tc39.es/proposal-temporal/docs/


let myDate =  new Date(); // Date is an object and that is why we are creating it's instance.
console.log(myDate); // 2023-09-18T03:42:48.448Z
console.log(myDate.toString()); // Mon Sep 18 2023 09:16:57 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Mon Sep 18 2023
console.log(myDate.toLocaleTimeString()); // 9:17:38 AM
console.log(myDate.toLocaleString()); // 9/18/2023, 9:18:10 AM
console.log(myDate.toJSON()); // 2023-09-18T03:48:47.585Z

let myCreatedDate = new Date(2023, 0, 23) //YYYY, Month starts with 0 and DD
console.log(myCreatedDate); // 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 12:00:00 AM

//to declare the format
let myNewDate = new Date("01-01-2023"); // this is suppose to give this format however it is giving indian format MM-DD-YYYY
console.log(myNewDate.toLocaleString()); // 1/1/2023, 12:00:00 AM

// Learn timestamp 

let newTimeStamp = Date.now(); 
console.log(newTimeStamp); //1695010976295 this is giving time in milliseconds till now from January 1, 1970 UTC (the epoch)

// get a time for your specific date
console.log(myNewDate.getTime()); // this will give the value in miliseconds

console.log(Math.floor(Date.now()/1000)); // to convert milliseconds into seconds

//Playing with dates
let newDate = new Date();
console.log(newDate.getDate()); // 18
console.log(newDate.getMonth()); // 8

// using string interpolation to print out Date as and time as you want

console.log(`Date is ${newDate.getDate()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);

// using locale string for format customization

console.log(
    newDate.toLocaleString('Default',{
        weekday : "narrow", // M
        month : "numeric"
    })
);