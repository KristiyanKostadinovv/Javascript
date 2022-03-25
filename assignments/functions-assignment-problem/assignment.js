const HIVALUE = "Hi ";
const me = "Kris ";

const hello = (name) => console.log('Hi ' + name);
const hello2 = (hi, value) => console.log(hi + value);
const hello3 = () => console.log(HIVALUE + me);
const hello4 = name => 'Hi ' + name;
const hello5 = (hi, name = "Kris") => console.log(hi + name);

hello("Kris");
hello2(HIVALUE, "Kris ");
hello3();
console.log(hello4("Kris"));
hello5("Hi ");


function notEmpty() {
    console.log("Strings are not empty");
}

function checkInput(...strings) {
    let isEmpty = false;
    for (const text of strings) {
        if (!text) {
            isEmpty = true;
            break;
        }
    }
    if (!isEmpty) {
        notEmpty();
    }
}

checkInput(" ", "asdasd", "ssadas");
