const USERLENGTH = 6;
const el = document.querySelector("#username");
const elMsg = document.querySelector("#userMsg");

const chkLength = (length) => length < USERLENGTH;

let chkUsername = function() {
    if (chkLength(this.value.length)) {
        elMsg.textContent = `Username must be at least ${USERLENGTH} characters`;
        elMsg.style.color = "red";
        this.style.border = "2px solid red";
    } else {
        elMsg.textContent = "Username valid";
        elMsg.style.color = "green";
        this.style.border = "revert";
    }
}

el.addEventListener("blur", chkUsername);

el.addEventListener("focus", () => {
    elMsg.textContent = `Username must be at least ${USERLENGTH} characters`
});

el.addEventListener("mouseover", () => {
    elMsg.textContent = `Username of at least ${USERLENGTH} characters`
});

el.addEventListener("mouseout", () => {
    elMsg.textContent = ``
    
});