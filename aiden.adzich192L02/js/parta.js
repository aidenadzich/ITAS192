let myArray = [5, 4, 2, 7, 6, 8, 5, 2, -8, 14]

for (let _ = 0; _ < myArray.length; _++) {
    console.log(myArray[_]);
}

let i = myArray.length-1;

while (i >= 0) {
    console.log(myArray[i]);
    i--;
}

let _ = 0;

while (_ < myArray.length) {
    let square = myArray[_] * myArray[_];
    console.log(`Element ${_} is ${myArray[_]} and the square is ${square}`);
    _++;
}