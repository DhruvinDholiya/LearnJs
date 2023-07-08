// let arr1 = [1, 2, 3, 4, 5];

// //copy
// let arr2 = [...arr1];
// console.log(arr2);

// //merging
// let arr3 = ['dhruvin', 25, ...arr1, 'surat'];
// console.log(arr3);

// let arr4 = [...arr1, ...arr3];
// console.log(arr4);

// //detructuring 
// let [name, age, marks, city] = arr3;
// console.log(marks);



// with Object ============================
let obj1 = {
    id: 101,
    name: 'dhruvin',
    age: 20
}

// copy
let obj2 = {...obj1};
console.log(obj2);

//merging 
let obj3 = {
    city: 'surat',
    ...obj1,
    age: 40
}
console.log(obj3);

//destructuring
let {id, name, age} = obj3;
console.log(name, age);