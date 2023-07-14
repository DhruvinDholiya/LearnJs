//1\\

class Person {
    age;
    #idNo;
    constructor(a, idNo) {
        this.age = a;
        this.#idNo = idNo;
    }
}

class PersonBio extends Person {
    name;
    constructor(a, n, idNo) {
        super(a, idNo);
        this.name = n
    }
    person_bio() {
        console.log("My name is", this.name);
        console.log("My Age is", this.age);
        // console.log("My Aadhar number is", this.#idNo);
    }
}

let res = new PersonBio(21, 'Dhruvin', 206662906216);
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

    #carName() {
       return this.FirstName + " " + this.LastName;
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
        // console.log(this.#carName)
    }
}

let info = new CarData(10000, 'Rolse', 'Royals');
info.car_info();


