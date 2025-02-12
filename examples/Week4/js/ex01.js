let h2El = document.querySelector("h2");
h2El.textContent = "h2 element changed";

let ulEl = document.querySelector("ul");
ulEl.innerHTML = "<li> New List element</li>";

// let paraAll = document.querySelectorAll("p");
// Array.from(paraAll).forEach((val, index) => val.textContent = `Changed para ${index+1}`);

let paraDivEl = document.querySelector("#divId > p");
paraDivEl.textContent = "New content";