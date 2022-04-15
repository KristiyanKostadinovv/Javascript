const addNum1 = document.getElementById("num1") as HTMLInputElement;
const addNum2 = <HTMLInputElement>document.getElementById("num2");
const btnAdd = <HTMLInputElement>document.querySelector("button");


function addAB(a: number, b: number) :number {
    return a + b;
}

function sum() {

    let a =  +addNum1.value;
    let b =  +addNum2.value;

    if(typeof a === "number" && typeof b ==="number" && !isNaN(a) && !isNaN(b))
    {
        let sum = addAB(a, b);
        console.log(sum);
    }
    else {
        throw new Error("No real value");
    }

}

btnAdd.addEventListener("click", sum);