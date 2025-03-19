let $$ = sel => document.querySelector(sel);

let displayData = $$("#display");
displayData.innerHTML = "";

addEventListener('load', getValues => {
    ['hero', 'power', 'email'].forEach(key => {
        let p = document.createElement("p");
        if (localStorage[key]) {
            p.textContent = `The element named ${key} has the value ${localStorage[key]}`;
            displayData.appendChild(p);
        } else {
            p.textContent = `No value provided for ${key}`
            displayData.appendChild(p);
        }
    });
});

