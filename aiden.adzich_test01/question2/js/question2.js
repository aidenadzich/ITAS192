class Animal {

    #commonName;
    #scientificName
    #habitat
    #endangered

    constructor(commonName, scientificName, habitat, endangered) {
        this.#commonName = commonName;
        this.#scientificName = scientificName;
        this.#habitat = habitat;
        this.#endangered = endangered;
    }

    get outputFormat() {

        let isEndangered;

        if (this.#endangered == true) {
            isEndangered = ""
        } else {
            isEndangered = "not"
        }

        return `${this.commonName} (${this.#scientificName}) is ${isEndangered} endangered`

    }

    get habitat() {
        return this.#habitat;
    }

    get commonName() {
        return this.#commonName;
    }

    get scientificName() {
        return this.#scientificName;
    }

    get endangered() {
        return this.#endangered;
    }

}

let animals = [];

animalData.forEach(element => {
    animals.push(new Animal(element[0], element[1], element[2], element[3]));
});
console.log(animals)

animals.forEach((element) => {
    if(element.habitat == "water") {
        document.getElementById("water").innerHTML += `<p>${element.outputFormat}</p>`;
    }
    if(element.habitat == "land") {
        document.getElementById("land").innerHTML += `<p>${element.outputFormat}</p>`;
    }
    if(element.habitat == "air") {
        document.getElementById("air").innerHTML += `<p>${element.outputFormat}</p>`;
    }
});

