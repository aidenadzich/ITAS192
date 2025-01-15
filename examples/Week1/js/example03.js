function greeting() {
    console.log("Hello World!!!!!!!");
}

let area = function(length=10, width=12) {
    let result = length * width;
    return result;
}

let arrowArea = (length, width) => {
    return length * width;
}

// or you could do

let shorterArrowArea = (length, width) => {return length * width;}

let circleArea = radius => Math.PI * (radius * radius)


greeting();
console.log(`The area is ${area(4,5)}`)
console.log(`The area is ${area()}`)
console.log(`The area is ${area(width=5)}`)

