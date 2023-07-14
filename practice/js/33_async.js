// function process_1() {
//     console.log("Process 111");
// }
// function process_2() {
//     let now = new Date();
//     while(Date.now() - now < 5000) {
//     }
//     console.log("Process 222");
// }
// function process_3() {
//     console.log("Process 333");
// }

// process_1();

// setTimeout(() => {
//     process_2();
// }, 6000);

// process_3();


// solve with CallBack Funcation ==========
// const result = (data) => {
//     console.log(data)
// }

// const nextProcess = () => {
//     setTimeout(() => {
//         let data = {id: 30, name: 'Dhruvin'};
//         result(data);
//     }, 3000);
// }

// nextProcess();

// console.log("handle user input");


//Solve with promise ==========
// console.log('Hanlde user start');
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve("I have data");
//     }, 3000);
// })


// myPromise
// .then((res) => console.log(res))
// .catch((error) => console.log(error))
// .finally(() => console.log("I am always excute."));


//Solve with acync and await ==========
console.log('Hanlde user start');

const  getData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    console.log(data);
}
getData();

console.log("handle user input");