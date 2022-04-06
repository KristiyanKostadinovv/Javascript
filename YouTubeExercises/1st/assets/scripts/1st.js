//CHECK IF 2 NUMS ARE EITHER 100 or SUM 100

class checkTwo {
    constructor(fNumber, sNumber) {
        this.fNumber = fNumber;
        this.sNumber = sNumber;
    }

    set setNum(fNumber) {
        this.fNumber = fNumber;
    }

    get getNum() {
        return this.fNumber;
    }

    set setNum(sNumber) {
        this.fNumber = sNumber;
    }

    get getNum() {
        return this.sNumber;
    }

    checkIf(){
        if (this.fNumber === 100 || this.sNumber === 100 || this.sNumber + this.fNumber === 100){
            return true;
        }
        else{
            alert("Numbers have nothing to do with 100");
        }
    }

}

const numbers = new checkTwo(30, 70);
console.log(numbers.checkIf());

