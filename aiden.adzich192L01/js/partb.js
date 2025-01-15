const MAXLENGTH = 8;

for(let _ = 1; _ <= MAXLENGTH; _++) {
    console.log("#".repeat(_));
}

console.log("-".repeat(50));

let char = "";

for(let pos1 = 1; pos1 <= MAXLENGTH; pos1++) {
    for(let pos2 = 1; pos2 <= MAXLENGTH; pos2++) { 
        if((pos1 + pos2) % 2) {
            char += " ";
        } else {
            char += "#";
        } 
    }
    char = char + "\n";
}
console.log(char);

