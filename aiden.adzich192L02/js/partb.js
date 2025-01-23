const longArray = [6, 2, 6, -3, -5, 6, 12, 6, 9, 7, 23, 23, 10, 64, 54, 32, 4, 65, 23, 5, 4, 6, 23, -1, 24, 67, 94, 8, 43, 56, 87, 12, 87, 23, 78, 5, 2, 8, 4, 8, 23, 78, 7, 6, 6, 6, 2, 1, -56, -23, 56, 13, 4, 45, -67, 5, 34, 5, 18, 65, 3, -7, 11, 4, 11, 9, 88, 5, -24, 15];

let numberSum = 0;
for (let _ = 0; _ < longArray.length; _++) {
    numberSum += longArray[_];
}
console.log(`The sum is: ${numberSum}`);

let numberAvg = numberSum / longArray.length;
console.log(`The average is: ${numberAvg}`);

let largestNumber = longArray[0];
for (let _ = 1; _ < longArray.length; _++) {
    if (largestNumber <= longArray[_]) {
        largestNumber = longArray[_];
    }
      
}
console.log(`The largest number is: ${largestNumber}`)

let sixCount = 0;
for (let _ = 0; _ < longArray.length; _++) {
    if (longArray[_] === 6) {
        sixCount++
    }
}
console.log(`There are ${sixCount} sixes in the array`)