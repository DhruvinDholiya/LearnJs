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

    full_name() {
        return this.FirstName + " " + this.LastName;
    }
}

class PersonBio extends Person {
    constructor(i, fn, ln) {
        super(i, fn, ln);
    }
    person_bio() {
        console.log("Id :", this.id);
        console.log(this.full_name())
    }
}

let res = new PersonBio(101, 'Dhruvin', 'Dholiya');


res.person_bio();


console.log('');
//2\\

class Car {
    modal;
    brand;
    color;
    constructor(m, b, c) {
        this.modal = m;
        this.brand = b
        this.color = c;
    }

    car_details() {
        console.log("Car Id :", this.modal);
        console.log("Brand :", this.brand);
        console.log("Color :", this.color);
    }
}

class CarInfo extends Car {
    price;
    constructor(m, b, c, p) {
        super(m, b, c);
        this.price = p;
    }
    car_info() {
        this.car_details();
        console.log("Price :" , this.price);
    }
}


let car_res = new CarInfo('GlA 450', 'Mercedes', 'Black', 11000000);

car_res.car_info();



