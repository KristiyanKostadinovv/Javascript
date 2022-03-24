const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumberTwo = Math.random();

function exOne() {
    if (randomNumber >= 0.7) {
        alert(randomNumber);
    }
}


function exTwo() {
    let j = 1;
    const array = [33, 3432, 5555, 7767, 8888, 99999];
    for (let i = 0; i < array.length; i++) {
        console.log(`Array #${j}: \n ${array[i]}`);
        j++;
    }
}


function exThree() {
    console.log("-------------------");
    console.log("BACKWARDS");
    console.log("-------------------");

    let j = 1;
    const array = [33, 3432, 5555, 7767, 8888, 99999];
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(`Array #${j}: \n ${array[i]}`);
        j++;
    }
}


function exFour(){
    if(randomNumber > 0.7 && randomNumberTwo > 0.7 || randomNumberTwo<0.2 || randomNumber<0.2){
        console.log(`Random numbers are greater than 0.7 or at least one of the two is not greater than 0.2: ${randomNumber}___${randomNumberTwo}`);
        alert("Greater than 0.7 or smaller than 0.2");
    }
}


exOne();
exTwo();
exThree();
exFour();
