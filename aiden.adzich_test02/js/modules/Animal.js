export class Animal {
    #commonName;
    #species;
    #animalClass;
    #habitat
    #endangered

    constructor(commonName, species, animalClass, habitat, endangered) {
        this.#commonName = commonName;
        this.#species = species;
        this.#animalClass = animalClass;
        this.#habitat = habitat;
        this.#endangered = endangered;
    }

    get commonName() {
        return this.#commonName;
    }

    get species() {
        return this.#species;
    }

    get animalClass() {
        return this.#animalClass;
    }

    get habitat() {
        return this.#habitat;
    }

    get endangered() {
        return this.#endangered;
    }




}