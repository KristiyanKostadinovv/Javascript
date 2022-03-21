const defRez = 0;
let rez = defRez;
let zapisVmasiv = [];


function inputNum() {
    return parseInt(userInput.value);
}

function Obekt(operaciq, predishenRez, izbranoChislo, rezultat){

    const obekt = {
        operaciq: operaciq,
        predishenRez: predishenRez,
        izbranoChislo: izbranoChislo,
        rezultat: rezultat
    };
    zapisVmasiv.push(obekt);
    console.log(zapisVmasiv);
    return obekt;
}


function minus() {
    const num = inputNum();
    const predishenRez = rez;
    const calcDescr = "Subtracting: " + rez + " - " + userInput.value;
    rez = rez - num;
    outputResult(rez, calcDescr);
    Obekt("-", predishenRez, num, rez);
}

function divide() {
    const num = inputNum();
    const predishenRez = rez;
    const calcDescr = "Dividing: " + rez + " / " + userInput.value;
    rez = rez / num;
    outputResult(rez, calcDescr);
    Obekt("/", predishenRez, num, rez);
}

function multiply() {
    const num = inputNum();
    const predishenRez = rez;
    const calcDescr = "Multiplying: " + rez + " * " + userInput.value;
    rez = rez * num;
    outputResult(rez, calcDescr);
    Obekt("*", predishenRez, num, rez);

}

function plus() {
    const num = inputNum();
    const predishenRez = rez;
    const calcDescr = "Adding: " + rez + " + " + userInput.value;
    rez = rez + num;
    outputResult(rez, calcDescr);
    Obekt("+", predishenRez, num, rez);

}


addBtn.addEventListener("click", plus);
subtractBtn.addEventListener("click", minus);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);