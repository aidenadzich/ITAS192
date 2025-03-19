const cardDeck = ["images/club_A.png", "images/Heart_A.png", "images/spade_A.png", "images/diamond_A.png"];

let flipCard = function(e) {
    let target = e.target;
    let cardToFlip = (target.id).slice(-1);
    target.src = cardDeck[cardToFlip];
}

let theEl = document.querySelector("#theCards");
theEl.addEventListener('click', flipCard, false);