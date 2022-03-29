class Course {
#_price;
    set price(val) {
        if (val < 0) {
            throw "Invalid INPUT";
            return;
        } else {
            this.#_price = val;
        }
    }

    get price() {
        return "$" + this.#_price;
    }


    constructor(title, length, price) {
        this._title = title;
        this._length = length;
        this.price = price;
    }

    calc() {
        return this._length / this.#_price;
    }

    print() {
        console.log(`Title: ${this._title}, Length: ${this._length}, Price: ${this.price}`);
        console.log("Length/Price: " + this.calc());
    }
}

class PracticalCourse extends Course {
    constructor(title, length, price, numOfEx) {
        super(title, length, price);
        this._numOfEx = numOfEx;
    }

}

class TheoreticalCourse extends Course {
    publish() {
        console.log("Print..............");
    }
}

const instCourse = new Course("M1", 100, 10);
const instCourse2 = new Course("M2", 200, 20);
const instCourse3 = new PracticalCourse("M3", 300, 30, 20);
const instCourse4 = new TheoreticalCourse("M4", 400, 40);

console.log(instCourse);
console.log(instCourse2);
console.log(instCourse3);
console.log(instCourse4);

instCourse.print();
instCourse2.print();
instCourse3.print();
instCourse4.print();
instCourse4.publish();
