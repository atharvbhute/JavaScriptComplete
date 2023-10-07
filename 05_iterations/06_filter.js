// filter - we use filter to get return from value foreach cannot return values

let numbers = [1,2,3,4,5,6,7];

let num = numbers.filter((num) => num>4);

// other ways syntacticle suger
/* 
numbers.filter((num) => {
    return num > 4
})
-------------------------
numbers.filter((num) => (return num > 4));
*/

console.log(num);

// good practicle filter Example getting filter for catlog
let arr = [
    {
        name : "Atharv",
        lastname : "Bhute",
        Designation : "Executive",
        Age : "20"
    },
    {
        name : "Junaid",
        lastname : "Khan",
        Designation : "Executive",
        Age : "23"
    },
    {
        name : "Pankaj",
        lastname : "R",
        Designation : "Executive",
        Age : "22"
    },
    {
        name : "Poonam",
        lastname : "Pottdar",
        Designation : "sr. Executive",
        Age : "29"
    },
]

const DATA = arr.filter((emp) => emp.Age == "20"); // have to give condition what to return in an array

// above we can give multiple conditions (emp) => emp.Age == "20" && emp.Designation == "Executive"

console.log(DATA);

// doing same thing with for each loop

const filteredData = [];

arr.forEach((data) => {
    if(data.Designation == "Executive"){
        filteredData.push(data)        
    }
});

console.log(filteredData);


