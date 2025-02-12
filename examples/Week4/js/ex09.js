const CLUBA = "Club_A.png";
const DIAMONDA = "Diamond_A.png";
const HEARTA = "Heart_A.png";

const cardEl1 = document.querySelector("#card1");
const cardEl2 = document.querySelector("#card2");
const cardEl3 = document.querySelector("#card3");

const flipOverCard1 = function() {
    this.src = `images/${CLUBA}`;
}

const flipOverCard2 = function() {
    this.src = `images/${DIAMONDA}`;
}

const flipOverCard3 = function() {
    this.src = `images/${HEARTA}`;
}

cardEl1.addEventListener("click", flipOverCard1);
cardEl2.addEventListener("click", flipOverCard2);
cardEl3.addEventListener("click", flipOverCard3);