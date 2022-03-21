const task3Element = document.getElementById('task-3');

function message() {
    alert("Hello World");
}

function name(name) {
    alert("Hi, " + name);
}

message();
name("Kris");

task3Element.addEventListener("click", message);

function threeStrings(a, b, c) {
    const names = a + b + c;
    return names;
}


const imena = threeStrings("Ivan", " Gosho", " Pesho");
alert("Three Strings: " + imena);
