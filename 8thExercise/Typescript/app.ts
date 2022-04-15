function add(a: number, b: number) {
    return a + b;
}

function printNum(res: number): void {
    console.log("Result: " + res);
}

const num = add(2, 5);
printNum(num);

/*
function generateError(message: string, code: number) {
    throw {message: message, code: code};
}

const storeError = generateError("Not assigned value", 200);
*/

