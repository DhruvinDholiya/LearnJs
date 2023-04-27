function demo() {
    console.log("Hello World!");
}
demo();

function currentAge(bOYear) {
    let age = 2023 - bOYear;

    return age;
}

let res = currentAge(1990);
console.log(res);