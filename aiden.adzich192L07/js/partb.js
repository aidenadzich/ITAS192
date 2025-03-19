const $$ = sel => document.querySelector(sel);

function registerForm() {
    let myDate = new Date();
    let formData = new FormData($$("form"));
    myDate.setFullYear(myDate.getFullYear() + 1);
    myDate.toUTCString();

    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let username = formData.get("username");
    let password = formData.get("password");

    firstName = validateForm("firstName", firstName);
    lastName = validateForm("lastName", lastName);
    username = validateForm("username", username);
    password = validateForm("password", password);

}

function validateForm(key, formValue) {
    if (formValue) {
        localStorage.setItem(key, formValue);
    } else {
        localStorage.removeItem(key);
    }
}

function onLoad() {
    let displaySection = $$("section");
    displaySection.innerHTML = "";
    console.log(localStorage);
    ['firstName', 'lastName', 'username', 'password', 'myDate'].forEach(key => {
        let p = document.createElement("p");
        if (localStorage[key]) {
            p.textContent = `${key}: ${localStorage[key]}`;
            displaySection.appendChild(p);
        }
 
    });
}

$$("#register").addEventListener("click", registerForm);
addEventListener('load', onLoad);