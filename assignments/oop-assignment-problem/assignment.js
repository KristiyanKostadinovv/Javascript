class Course {
    #price;
    get price() {
        return "$" + this.#price;
    }

    set price(val) {
        if (val < 0) {
            throw "Invalid value";
        } else {
            this.#price = val;
        }
    }


    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    calculate() {
        return this.length / this.#price;
    }

    print() {
        console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`);
        console.log("Length/Price: " + this.calculate());
    }

}

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log("Print Something");
    }
}


const instantiateCourse = new Course("Movie", 100, 10);
console.log(instantiateCourse);
const instantiateCourse2 = new Course("Movie2", 200, 2);
console.log(instantiateCourse2);
const instantiateCourse3 = new PracticalCourse("Movie3", 300, 10, 30);
console.log(instantiateCourse3);
const instantiateCourse4 = new TheoreticalCourse("Movie4", 400, 20);



instantiateCourse.print();
instantiateCourse2.print();
instantiateCourse3.print();
instantiateCourse4.print();
instantiateCourse4.publish();