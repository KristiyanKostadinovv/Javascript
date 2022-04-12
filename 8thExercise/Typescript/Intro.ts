const addNum1 = document.getElementById("num1") as HTMLInputElement;
const addNum2 = <HTMLInputElement>document.getElementById("num2");
const btnAdd = document.querySelector("button");

//when globally initialized (doesn't convert to int)
/*const ch1 = +addNum1.value;
const ch2 = +addNum2.value;*/

function add(a: number, b: number) {
    return a + b;
}

function sum() {

    const num1 = parseInt(addNum1.value);//when inserted a character after a num doesn't calc it
    const num2 = parseInt(addNum2.value);
    const sum = add(num1, num2);
    //  const sum2 = add(ch1,ch2);
    console.log(sum);
    // console.log(sum2);
}

btnAdd.addEventListener("click", sum);