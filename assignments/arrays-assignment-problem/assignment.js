const array = [2, 4, 6, 7, 8];

function greaterThan5(val) {
    if (val > 5) {
        return val;
    }
}

function forMap(val) {
    val = {
        num: val,
    }
    return val;
}

function multiplyAll(a, b) {
    return a * b;
}

function findMaxMin(val) {
    const max = Math.max.apply(null, val);
    const min = Math.min.apply(null, val);
    console.log("Min: " + min, "Max: " + max)
}

function noDuplicate() {
    const set = new Set();
    set.add(-2);
    set.add(-2);
    set.add(-3);
    set.add(2);
    console.log(set);
}


const filterArray = array.filter(greaterThan5);
console.log(filterArray);

const mappedArray = array.map(forMap);
console.log(mappedArray);

const reducedArray = array.reduce(multiplyAll);
console.log(reducedArray);

findMaxMin(array);
noDuplicate();
