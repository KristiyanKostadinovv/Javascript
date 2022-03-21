const defRez = 0;
let rez = defRez;
let zapisVmasiv = [];


function inputNum() {
    return parseInt(userInput.value);
}

function minus() {
    const num = inputNum();
    const predishenRez = rez;
    const calcDescr = "Subtracting: " + rez + " - " + userInput.value;
    rez = rez - num;
    outputResult(rez, calcDescr);
    const obekt = {
        operaciq: "-",
        predishenRez: predishenRez,
        izbranoChislo: num,
        rezultat: rez
    };
    zapisVmasiv.push(obekt);
    console.log(zapisVmasiv);
}

function divide() {
    const num = inputNum();
    const predishenRez = rez;
    const calcDescr = "Dividing: " + rez + " / " + userInput.value;
    rez = rez / num;
    outputResult(rez, calcDescr);
    const obekt = {
        operaciq: "/",
        predishenRez: predishenRez,
        izbranoChislo: num,
        rezultat: rez
    };
    zapisVmasiv.push(obekt);
    console.log(zapisVmasiv);
}

function multiply() {
    const num = inputNum();
    const predishenRez = rez;
    const calcDescr = "Multiplying: " + rez + " * " + userInput.value;
    rez = rez * num;
    outputResult(rez, calcDescr);
    const obekt = {
        operaciq: "*",
        predishenRez: predishenRez,
        izbranoChislo: num,
        rezultat: rez
    };
    zapisVmasiv.push(obekt);
    console.log(zapisVmasiv);
}

function plus() {
    const num = inputNum();
    const predishenRez = rez;
    const calcDescr = "Adding: " + rez + " + " + userInput.value;
    rez = rez + num;
    outputResult(rez, calcDescr);
    const obekt = {
        operaciq: "+",
        predishenRez: predishenRez,
        chislo: num,
        rezultat: rez
    };
    zapisVmasiv.push(obekt);
    console.log( zapisVmasiv);
}


addBtn.addEventListener("click", plus);
subtractBtn.addEventListener("click", minus);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);