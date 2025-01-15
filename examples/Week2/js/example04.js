const findSum = function(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const showSplit = function(a, b, c, d) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`d is ${d}`);
}

let value = findSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`Result is ${value}`)

let value2 = findSum(1, 2, 3);
console.log(`Result is ${value2}`)

let myVals = [2, 3, 4, 5]
showSplit(...myVals);