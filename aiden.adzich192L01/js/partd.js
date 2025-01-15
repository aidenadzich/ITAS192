function calcCircumference(radius) {
    return (2 * Math.PI * radius);
}

let calcArea = function(radius) {
    return (Math.PI * radius * radius);
}

console.log(calcCircumference(2).toFixed(2));
console.log(calcCircumference(6).toFixed(2));
console.log(calcCircumference(10).toFixed(2));

console.log(calcArea(2).toFixed(2));
console.log(calcArea(6).toFixed(2));
console.log(calcArea(10).toFixed(2));