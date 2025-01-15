let xMen = ["Wolverine", "Cyclops", "Storm", "Beast", "Professor X", "Jean Grey", "Rogue", "Magneto", "Gambit"];

let myNumbers = [7, 5, 8, 12, 6, 10];

// Question 1
let xMenCount = 0;

while (xMenCount < xMen.length) {
    console.log(xMen[xMenCount]);
    xMenCount++;
}

// Question 2
let numberSum = 0
for (let i = 0; i < myNumbers.length; i++) {
    numberSum += myNumbers[i];
}
console.log(numberSum);

//Question 2 While Loop
let numberCount = 0;
let numberTotal = 0;

while (numberCount < myNumbers.length) {

    numberTotal += myNumbers[numberCount];
    numberCount++;

}
console.log(numberTotal);

// Question 3
for (let index = xMen.length - 1; index >= 0; index--) {
    console.log(xMen[index]);
}

// Question 3 While Loop
let xMenCount2 = xMen.length;

while (xMenCount2 >= 0) {
    console.log(xMen[xMenCount2]);
    xMenCount2--;
}


// Question 4
let smallestCount = 1;
let smallestNumber = myNumbers[0];

while (smallestCount < myNumbers.length) {
    if (myNumbers[smallestCount] < smallestNumber) {

        smallestNumber = myNumbers[smallestCount];

    }

    smallestCount++;
}
console.log(smallestNumber);