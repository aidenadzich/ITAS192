const $$ = (e) => document.querySelector(e);

// EXAMPLE 5
// function setDefaults() {
//     const elUsername = $$("#username");
//     const elSurname = $$("#surname");
//     const elMsgUsername = $$("#userMsg");
//     const elMsgSurname = $$("#surnameMsg");
// }

// Fields
const elUsername = $$("#username");
const elSurname = $$("#surname");
const elMsgUsername = $$("#userMsg");
const elMsgSurname = $$("#surnameMsg");

let chkUsername = () => {
    if (elUsername.value.length < 6) {
        elMsgUsername.textContent = "Username must be at least 6 characters";
        elMsgUsername.style.color = "red";
        elUsername.style.border = "2px solid red";
    } else {
        elMsgUsername.textContent = "Username valid";
        elMsgUsername.style.color = "green";
        elUsername.style.border = "revert";
    }
}

let chkSurname = function (chkLength) {
    if (elSurname.value.length < chkLength) {
        elMsgSurname.textContent = "Not long enough";
    } else {
        elMsgSurname.textContent = "Long enough"
    }
}

elUsername.onblur = chkUsername;
elSurname.addEventListener("blur", () => chkSurname(5));


// EXAMPLE 5
// window.addEventListener("load", setDefaults);