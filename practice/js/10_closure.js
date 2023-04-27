let name = 'Dhruvin';

const info = (salary) => {

    let age = '21';

    return function printAllDate() {
        console.log(name);
        console.log(age);
        console.log(salary);
    }
}

let res = info(50000);
res();