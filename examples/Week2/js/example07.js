let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present','fries'];

let mapArray = [1, 4, 9, 16];

let findWord = words.find(word => word.length > 6);
console.log(findWord);

let result = words.filter(word => word.length > 6);
console.log(result);

let map1 = mapArray.map(_ => _ * 2);
console.log(map1);

const getSum = (total, currentValue) => total + currentValue;

let reduced = mapArray.reduce(getSum);
console.log(reduced);