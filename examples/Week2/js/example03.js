let captains = ["Benjamin Pike", "James T. Kirk", "Jean Luc Picard", "Kathryn Janeway", "Gabriel Lorca", "Spock", "Michael Burnam", "Hikaru Sulu", "Jonathan Archer", "Douglas Adams"];

const animals = ["dog", "cat", "rat", "hamster", "horse", "cow", "pig", "goldfish"];

console.table(captains);

let lastCaptain = captains.pop();
console.log(`Last captain was ${lastCaptain}`);
console.log(`Captain Array now is: `);
console.table(captains);

captains.push('William Riker');
console.log(`Captain Added.`);
console.log(`Captain Array now is: `);
console.table(captains);

captains.shift();
console.log('Captain Removed')
console.log(`Captain Array now is: `);
console.table(captains);

let newCaptain = 'Scotty';
captains.unshift(newCaptain);
console.log(`Captain Added.`);
console.log(`Captain Array now is: `);
console.table(captains);

let removedCaptains = captains.splice(2, 3);
console.log(`${removedCaptains} removed.`);
console.log(`Captain Array now is: `);
console.table(captains);

let removeAdd = captains.splice(4, 2, "Douglas Adams", "John Harriman", "Saru")
console.log(`Captain Array now is: `);
console.table(captains);

console.table(animals);

let newAnimals = animals.slice(2, 4);
console.log(newAnimals);
console.table(newAnimals);
console.table(animals);