class Building {
    constructor(l, w) {
        this.length = l;
        this.width = w;
    }

    area() {
        let a = this.length * this.width;
        console.log(a);
    }
}

const project_1 = new Building(100, 200);
project_1.area();