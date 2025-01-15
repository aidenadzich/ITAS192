for(let _ = 0; _ <= 100; _++) {
    let fizzbuzz = "";
    if(_ % 3 === 0) {
        fizzbuzz += "fizz"
    } 
    if(_ % 5 === 0) {
        fizzbuzz += "buzz"
    }
    console.log(fizzbuzz || _)
}