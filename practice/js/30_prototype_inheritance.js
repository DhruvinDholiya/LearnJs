//1\\

class Person {
    id;
    FName;
    LName;
    constructor(i, fn, ln) {
        this.id = i;
        this.FirstName = fn;
        this.LastName = ln;
    }

    PersonBio() {
        console.log("Id :", this.id);
        console.log("First Name :", this.FirstName);
        console.log("Last Name :", this.LastName);
    }
}

class AddAge extends Person {
    constructor(i, fn, ln) {
        super(i, fn, ln);
    }
    person_bio() {
        this.PersonBio();
        console.log("Age :", this.age);
    }
}

let info = new AddAge(101, 'Dhruvin', 'Dholiya');
info.__proto__.age = 21;
info.person_bio();



console.log('');
//2\\

class Car {
    modal;
    brand;
    constructor(m, b) {
        this.modal = m;
        this.brand = b
    }

    car_details() {
        console.log("Car Id :", this.modal);
        console.log("Brand :", this.brand);
        console.log("Color :", this.color);
    }
}

class CarInfo extends Car {
    price;
    constructor(m, b, p) {
        super(m, b);
        this.price = p;
    }
    car_info() {
        this.car_details();
        console.log("Price :" , this.price);
    }
}


let car_res = new CarInfo('GlA 450', 'Mercedes', 11000000);
car_res.__proto__.color  = 'black';
car_res.car_info();



