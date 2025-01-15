let calculateDogAge = puppyAge => puppyAge * 7

console.log(calculateDogAge(1))
console.log(calculateDogAge(2.5))
console.log(calculateDogAge(7))

let checkDogAge = puppyAge => { if (isNaN(puppyAge)) {return -1;} else if (puppyAge < 0) {return -2;} else {return 0;}}

let calculateDogAge2 = puppyAge => { 
    let result = checkDogAge(puppyAge);
    if (result === 0) { return calculateDogAge(puppyAge); }
    else { return result; }
}

console.log(calculateDogAge2("cat"));
console.log(calculateDogAge2(2.5));
console.log(calculateDogAge2(-5));