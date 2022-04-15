"use strict";
const addNum1 = document.getElementById("num1");
const addNum2 = document.getElementById("num2");
const btnAdd = document.querySelector("button");
function addAB(a, b) {
    return a + b;
}
function sum() {
    let a = +addNum1.value;
    let b = +addNum2.value;
    if (typeof a === "number" && typeof b === "number" && !isNaN(a) && !isNaN(b)) {
        let sum = addAB(a, b);
        console.log(sum);
    }
    else {
        throw new Error("No real value");
    }
}
btnAdd.addEventListener("click", sum);
