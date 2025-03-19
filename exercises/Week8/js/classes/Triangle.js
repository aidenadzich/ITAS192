export default class Triangle {
    constructor(side1, side2, side3) {
        if (this.#checkValid(side1, side2, side3)) {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        } else {
            throw new Error('Invalid Triangle');
        }    
    } 
    #checkValid(side1, side2, side3) {
        return ( side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1 );
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3
    }

    getArea() {
        let s = this.getPerimeter() / 2;
        s = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
        return s;
    }
}