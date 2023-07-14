//1\\

class Person {
    age;
    constructor(a) {
        this.age = a;
    }

    person_bio() {
        console.log("My age is", this.age);
    }
}

class PersonBio extends Person {
    name;
    constructor(a, n) {
        super(a);
        this.name = n
    }
    person_bio() {
        console.log("My name is", this.name);
    }
}

let res = new PersonBio(21, 'Dhruvin');
res.person_bio();


console.log('');
//2\\

class Car {
    FirstName;
    LastName;
    constructor(fn, ln) {
        this.FirstName = fn;
        this.LastName = ln;
    }

    car_info() {
       let name = this.FirstName + " " + this.LastName;
       console.log(name);
    }
}

class CarData extends Car {
    price;
    constructor(p, fn, ln) {
        super(fn, ln);
        this.price = p
    }
    car_info() {
        console.log("Car's price is", this.price);
    }
}

let info = new CarData(10000, 'Rolse', 'Royals');
info.car_info();


