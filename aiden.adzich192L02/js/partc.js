const startChar = ['J', 'i', 'a', 's', 'v', ' ', 'a', 's', 'S', 'o', 'c', ' ', 'r', 'c', 'i', 'o', 'p', 'o', 't', 'l'];

let first = "";
let second = "";

while (startChar.length > 0) {
    if (startChar.length % 2 == 0){
        first += startChar.shift();
    } else {
        second += startChar.shift();
    }
}
console.log(`${first} ${second}`);