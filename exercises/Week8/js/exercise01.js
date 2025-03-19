import Triangle from "./classes/Triangle.js";

let triangle1, triangle2;

try {
    triangle1 = new Triangle(2, 5, 6);
    triangle2 = new Triangle(1, 2, 3);
} catch(error) {
    console.error(`Error creating triangle`)
}

const triangles = [triangle1];

triangles.forEach((triangle, index) => {
    console.log(`Triangle ${index+1}`)
    console.log(`   Perimeter: ${triangle.getPerimeter()}`);
    console.log(`   Area: ${triangle.getArea().toFixed(3)}`);
})