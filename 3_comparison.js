// comparison operators >,<,>=,<=,==, != , this comparison is understandable

// however comparing two diffrent datatypes are difficult// in typescript there are strict rules in you can't campare to datatypes

console.log("2" > 0); //true as 2 is greater than 0, Java script converted "2" to number
console.log(("02" > 0)); // Same output

console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // true

/*
in JS and equality operator to == and comparison operators >,<,>=,<= works diffrently, comparison operators convert null to 0 and that's why
in third example it true o is not greater but equal to 0
*/

console.log(undefined > 0); //false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false

// === this is strict check this compare datatypes as well

// Conversions like above you should always avoid as this might give you null sometime Nan and what not that's the flaw of Javascript
//however that's how it is so best is to avoid this (for null and undefined example)