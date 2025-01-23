let mySort = ["HELLO", "hello", "hEllo", "réservé", "RESERVE", "Reserve", "rezerve"];
let mySort2 = [2, 5, 4, 100, 13, 6, 201, 51];

mySort.sort();
console.table(mySort);

mySort2.sort();
console.table(mySort2);

mySort2.sort((a, b) => a - b);
console.table(mySort2);

mySort.sort((a, b) => a.localeCompare(b));
console.table(mySort);