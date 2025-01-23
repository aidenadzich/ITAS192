class Flower {
    #name;
    #color;
    #height;
    #bloomSeason;

    constructor(name, color, height, bloomSeason) {
        this.#name = name;
        this.#color = color;
        this.#height = height;
        this.#bloomSeason = bloomSeason;
    }

    get name() {
        return this.#name;
    }

    get color() {
        return this.#color;
    }

    get height() {
        return this.#height;
    }

    get bloomSeason() {
        return this.#bloomSeason;
    }

    set name(value) {
        this.#name = value;
    }

    set color(value) {
        this.#color = value;
    }

    set height(value) {
        this.#height = value;
    }

    set bloomSeason(value) {
        this.#bloomSeason = value;
    }

    describe() {
        return `The ${this.#name} is a ${this.#color} flower that grows to ${this.#height}ft and blooms in ${this.#bloomSeason}.`;
    }

    isBlooming(season) {
        if (season === this.#bloomSeason) {
            return true;
        } else {
            return false;
        }
    }

    grow(increment) {
        this.#height += increment;
    }

}

const nootkaRose = new Flower('Nootka Rose', 'pink', 3, 'spring');
const pacificRhododendron = new Flower('Pacific Rhododendron', 'purple', 6, 'spring');
const douglasAster = new Flower('Douglas Aster', 'lavendar', 2, 'fall');
const westernTrillium = new Flower('Western Trillium', 'white', 1, 'spring');
const camas = new Flower('Camas', 'purple', 2, 'winter');

console.log(nootkaRose.describe());
console.log(pacificRhododendron.isBlooming('spring'));
console.log(douglasAster.isBlooming('spring'));
westernTrillium.grow(1);
console.log(westernTrillium.height);
console.log(camas);
console.log(camas.describe());
console.log(camas.isBlooming('winter'));
camas.grow(1);
console.log(camas.height);
