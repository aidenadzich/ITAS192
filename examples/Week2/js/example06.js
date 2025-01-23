const everyOne = [1, 30, 39, 29, 20, 13];
const everyTwo = [1, 2, 3, 4, 10, 21]
const someOne = [1, 2, 3, 4, 5];

function isBelow(currentValue) {
    return currentValue < 25;
}

const evenFunction = function(currentValue) {
    return currentValue % 2 === 0;
}

let checkArray = everyOne.every(isBelow);
console.log(checkArray);

checkArray = everyTwo.every(isBelow);
console.log(checkArray);

checkArray = everyOne.every(_ => _ < 40);
console.log(checkArray);

console.log(someOne.some(evenFunction));
console.log(someOne.some(_ => _ % 2 === 0));
