var addNum1 = document.getElementById("num1");
var addNum2 = document.getElementById("num2");
var btnAdd = document.querySelector("button");
//when globally initialized (doesn't convert to int)
/*const ch1 = +addNum1.value;
const ch2 = +addNum2.value;*/
function add(a, b) {
    return a + b;
}
function sum() {
    var num1 = parseInt(addNum1.value);
    var num2 = parseInt(addNum2.value);
    var sum = add(num1, num2);
    //  const sum2 = add(ch1,ch2);
    console.log(sum);
    // console.log(sum2);
}
btnAdd.addEventListener("click", sum);
