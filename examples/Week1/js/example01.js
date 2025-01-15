let myVar = 3;
let myStr = "the cat's mouse";
let myNumStr = "18";

console.log(`myVar is ${myVar}\nmyStr is ${myStr}\nmyNumStr is ${myNumStr}`);

console.log(`${myNumStr - myVar}`);
console.log(`${myNumStr / myVar}`);
console.log(`${myNumStr + myVar}`);
console.log(`${parseInt(myNumStr) + myVar}`);

let myBool1 = 5;
let myBool2 = "5";

console.log(`The result of myBool1 equal to myBool2 is ${myBool1 == myBool2}`);
console.log(`The result of myBool1 strictly equal to myBool2 is ${myBool1 === myBool2}`);

console.log(`${(typeof(myBool1) == "number") ? "the value of myBool is a number" : "the value of myBool is not a number"}`);

console.log(`The value of ${myBool1} is ${(typeof(myBool1) == "number") ? "" : "not "}a number`)