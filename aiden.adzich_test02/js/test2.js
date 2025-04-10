import { Animal } from './modules/Animal.js'

let allAnimals = [];
const $$ = document.querySelector.bind(document);
const landColumn = $$('div#landColumn');
const airColumn = $$('div#airColumn');
const seaColumn = $$('div#seaColumn');
let landAnimals = 0;
let airAnimals = 0;
let seaAnimals = 0;
let chondrichthyes = 0;
let cephalopoda = 0;
let isEndangered = "border-green-500";

function fetchAnimals() {
    
    const theURL = 'https://appdev.itas.ca/~amcdonald/192t02/animals.json';
    fetch(theURL)
    .then(response => response.text())
    .then(data => {
        buildArray(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function buildArray(animalData) {

    let animals = JSON.parse(animalData);

    animals.forEach(animal => {

        const newAnimal = new Animal(
            animal.commonName,
            animal.species,
            animal.class,
            animal.habitat,
            animal.endangered
        );

        // console.log('New Animal Added:', newAnimal);

        allAnimals.push(newAnimal);

        allAnimals.sort((a, b) => a.commonName.localeCompare(b.commonName));

        // console.log(animal.class);

        countAnimals(animal.class)


    });

    allAnimals.forEach(animal => displayAnimal(animal));

    saveCookies();
    // console.log(allAnimals);

    localStorage.setItem("chondrichthyes", chondrichthyes);
    localStorage.setItem("cephalopoda", cephalopoda);


}

function displayAnimal(animal) {

    if (animal.endangered) {
        isEndangered = "border-red-500";
    } else {
        isEndangered = "border-green-500"
    }

    if(animal.habitat == 'land') {
        const animalFields = `
            <div class="relative w-2fr rounded-xl overflow-hidden shadow-lg border-4 ${isEndangered} my-4 p-2" style="text-shadow: 3px 2px 2px black;">
                <div class="text-center border-gray-600">
                Name: ${animal.commonName}<br>
                Species: ${animal.species}<br>
                Class: ${animal.animalClass}<br>
                </div>
            </div>
        `;
        landColumn.insertAdjacentHTML('beforeend', animalFields);
        landAnimals += 1;

    } else if(animal.habitat == 'air') {
        const animalFields = `
            <div class="relative w-2fr rounded-xl overflow-hidden shadow-lg border-4 ${isEndangered} my-4 p-2" style="text-shadow: 3px 2px 2px black;">
                <div class="text-center border-gray-600">
                Name: ${animal.commonName}<br>
                Species: ${animal.species}<br>
                Class: ${animal.animalClass}<br>
                </div>
            </div>
        `;
        airColumn.insertAdjacentHTML('beforeend', animalFields);
        airAnimals += 1;

    } else {
        
        const animalFields = `
            <div class="relative w-2fr rounded-xl overflow-hidden shadow-lg border-4 ${isEndangered} my-4 p-2" style="text-shadow: 3px 2px 2px black;">
                <div class="text-center border-gray-600">
                Name: ${animal.commonName}<br>
                Species: ${animal.species}<br>
                Class: ${animal.animalClass}<br>
                </div>
            </div>
        `;
        seaColumn.insertAdjacentHTML('beforeend', animalFields);
        seaAnimals += 1;

    }
}

function countAnimals(animalClass){
    // console.log(animalClass);
    if(animalClass == "Chondrichthyes") {
        // console.log("Added!")
        chondrichthyes += 1;
    } else if(animalClass == "Cephalopoda") {
        // console.log("Added!")
        cephalopoda += 1;
    }
}

function saveCookies() {
    let expireDate = new Date();
    expireDate.setMonth(expireDate.getMonth() + 1);

    document.cookie = `landAnimals=${encodeURIComponent(landAnimals)}; expires=${expireDate.toUTCString()}`;
    document.cookie = `airAnimals=${encodeURIComponent(airAnimals)}; expires=${expireDate.toUTCString()}`;
    document.cookie = `seaAnimals=${encodeURIComponent(seaAnimals)}; expires=${expireDate.toUTCString()}`;

}

addEventListener('load', fetchAnimals);

