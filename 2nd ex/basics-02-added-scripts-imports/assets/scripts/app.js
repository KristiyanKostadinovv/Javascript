const defRez = 0;
let rez = defRez;
let zapisVmasiv = [];


function inputNum() {
    return parseInt(userInput.value);
}

function izberiOpciq(izbor) {

    if (izbor !== "Subtract" && izbor !== "Add" && izbor !== "Divide" && izbor !== "Multiply") {
        return;
    }


    const num = inputNum();
    const predishenRez = rez;
    let calcDescr;
    if (izbor === "Subtract") {
        rez = rez - num;
        calcDescr = "Subtracting: " + rez + " - " + userInput.value;
    } else if (izbor === "Add") {
        rez = rez + num;
        calcDescr = "Adding: " + rez + " + " + userInput.value;
    } else if (izbor === "Divide") {
        rez = rez / num;
        calcDescr = "Dividing: " + rez + " / " + userInput.value;
    } else if (izbor === "Multiply") {
        rez = rez * num;
        calcDescr = "Multiplying: " + rez + " * " + userInput.value;
    }
    outputResult(rez, calcDescr);
    Obekt(izbor, predishenRez, num, rez);
}


function Obekt(operaciq, predishenRez, izbranoChislo, rezultat) {

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
    izberiOpciq("Subtract");
}

function divide() {
    izberiOpciq("Divide");
}

function multiply() {
    izberiOpciq("Multiply");
}

function plus() {
    izberiOpciq("Add");
}

addBtn.addEventListener("click", plus);
subtractBtn.addEventListener("click", minus);
divideBtn.addEventListener("click", divide);
multiplyBtn.addEventListener("click", multiply);