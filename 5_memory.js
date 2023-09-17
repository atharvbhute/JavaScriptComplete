/*
two types of memory
1. Stack - used in premitive data types
2. Heap - used in non premitive data types

Stack = it gives you copy of variable of data
Heap = it gives you reference
*/

// here are some examples 

// stack
let name1 = "Atharv";
let name2 = name1;

name2 = "Gayati";

console.log(name1);
console.log(name2);

/*
as we can see in above example name 1 didn't changed only name 2 changed however we have given the reference for name2 of name 1
in stack when we give reference to another variable it gives copy of that variable, in above example name2 is copy of name1 and 
name1 remains same, and when we changed name2 it the copy of name 1 changed.
*/

// Heap

// Exapmle 1
let person1 = {
    name: "Atharv",
    age: 25
}

let person2 = person1

person2.name = "Gayatri" // here we have changed value of person2 however person1's value is changed now

console.log(person1.name); //  Gayati
console.log(person2.name); // Gayati

// Example 2

let car1 = {
    color: "Red",
    price: "20cr"
}

let car2 = car1;

car2 = {
    color: "Blue",
    price: "25"
}

console.log(car1);
console.log(car2);

/*
in above example person1 and person was pointing or refferencing to the same memory block in Heap and that is why both value changed
however if person2 = {whole diffrent object} and not changing properties only thenit will create whole new block in memory and 
point person 2 to that memory block of object as shown in example 2.
note* :  variable created in stack only however the object is in heap and that variable is pointing to heap memory block
*/
