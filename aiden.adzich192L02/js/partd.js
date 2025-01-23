const arrayOne = [6, 8, 100, 1, 10, 1000, 13, 24, 5, 8, 0, -15, 77, 770];
const arrayTwo = [13, 47, 32, 23, 22, 28, 19, 20];
const arrayThree = ['furniture', 'school', 'week', 'cause', 'Week', 'POKER', 'turkey', 'wEEk', 'three', 'football', 'horse'];


let checkArray = arrayOne.every(_ => _ % 2 === 0);
console.log(`Is every number in arrayOne even? ${checkArray}`);

checkArray = arrayTwo.every(_ => _ > 10);
console.log(`Is every number in arrayTwo greater than 10? ${checkArray}`)

checkArray = arrayTwo.some(_ => _ % 3 === 0);
console.log(`Are any numbers in arrayTwo evenly divisible by 3? ${checkArray}`);

checkArray = arrayThree.some(_ => _.length === 4);
console.log(`Are there any words in arrayThree with a length of 4? ${checkArray}`);

let arrayOneSingleDigit = arrayOne.filter(_ => _ >= 0 && _ <= 9);
console.log(arrayOneSingleDigit);

let arrayThreeFiveLetters = arrayThree.filter(_ => _.length === 5);
console.log(arrayThreeFiveLetters);

let arrayTwoMinusTen = arrayTwo.map(_ => _ - 10);
console.log(arrayTwoMinusTen);

arrayOne.sort((a, b) => a - b);
console.table(arrayOne);

arrayThree.sort((a, b) => a.localeCompare(b));
console.table(arrayThree);