for (let i = 0 ; i < 10 ; i++) {
    const element = i;
    if (i == 6) { // here added if statement just you can add if you want and do whatever you want to do.
        console.log(i); 
    }
    console.log(element);
}
// first this loop initialized in index value as 0, then it is checking condition i < 10, 
// going into loop executing code and then, jumping out to increase value

// for loop within for loop table example

// for (let i = 1 ; i <= 10 ; i++) {
//     if (i != 1) {
//         console.log(`Table of : ${i}`);
//         for (let j = 1; j <= 10; j++) {
//             console.log(`- ${i} * ${j} = ${i*j}`);
//         }
//     }
// }

// looping through an array

let array = ["Atharv", "Gayatri", "Radhika"];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

// break and continue
// break
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break; // this will stop loop before printing 5 and code will jump directly out of scope
    }
    console.log(i);
}

// continue
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue; // this will not execute further code for this loop iteration
    }
    console.log(i); 
}
