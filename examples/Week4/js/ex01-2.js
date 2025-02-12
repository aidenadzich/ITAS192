let p1El = document.querySelector("p");
let textContentVal = p1El.textContent;
let innerTextVal = p1El.innerText;
let innerHTMLVal = p1El.innerHTML;

console.log(`The text content ${textContentVal}`);
console.log(`The inner text content ${innerTextVal}`);
console.log(`The inner HTML ${innerHTMLVal}`);

let lastDivEl = document.querySelector("#t");
let lastDivInnerText = lastDivEl.innerText;
let lastDivTextContent = lastDivEl.textContent; 

console.log(`Text content: ${lastDivTextContent}`);
console.log(`Inner Text: ${lastDivInnerText}`);

const firstImg = document.querySelector("img");
firstImg.src = "./images/deer.jpg";