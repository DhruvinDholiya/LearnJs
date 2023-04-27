// let rollNo = [10, 20, 30, 40, 50, 60];

// * Access to Array ======

// for(let i = 0; i < rollNo.length; i++) {
//     console.log(rollNo[i]);
// }

// rollNo.forEach(function (value, index) {
//     console.log(index, value);
// });

// rollNo.forEach((value, index) => {
//     console.log(index, value);
// });

// rollNo.map(function (value, index) {
//     console.log(index, value);
// });

// rollNo.map((value, index) => console.log(index, value));


// * Add and remove array ======= 

// let x = [10, 20, 30, 40, 50, 60];

// // update Array
// x[2] = 100;
// console.log(x); 

// // Add array at last
// x.push(90);
// console.log(x); 

// // Add array at first
// x.unshift(90);
// console.log(x); 

// //remove from last
// x.pop();
// console.log(x);

// //remove from first
// x.shift();
// console.log(x);


// * Funcation of array ======= 
let demo = [10, 20, 30, 40, 50, 60];

// let demo_2 = [10, 20, 30, 40, 50, 60];
// let demo_3 = [10, 20, 30, 40, 50, 60];

// let x = Array.isArray(demo);
// console.log(demo);

// let x = demo.concat(demo_2, demo_3);
// console.log(x);

// let x = demo.some((v) => v === 50);
// console.log(x);

// let x = demo.find((v) => v < 50);
// console.log(x);

// let x = demo.toString();
// console.log(x);

let x = demo.splice(4, 0, "banana");
console.log(x);