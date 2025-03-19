const $$ = sel => document.querySelector(sel);

function registerForm() {
    let newDate = new Date();
    let formData = new FormData($$("form"));
    newDate.setFullYear(newDate.getFullYear() + 1);
    newDate.toUTCString();


    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let username = formData.get("username");
    let password = formData.get("password");

    firstName = validateForm("firstName", firstName, newDate);
    lastName = validateForm("lastName", lastName, newDate);
    username = validateForm("username", username, newDate);
    password = validateForm("password", password, newDate);

}

function validateForm(key, formValue, expires) {
    if (formValue) {
        document.cookie = `${key}=${encodeURIComponent(formValue)}; expires=${expires}`;
    }
}



function onLoad() {
    let cookieArray = document.cookie.split("; ");
    console.table(cookieArray);
    let myCookies = {};
    cookieArray.forEach(cookie => {
        let equalPos = cookie.search("=");
        let cookieValue = decodeURIComponent(cookie.substring(equalPos + 1));
        let cookieName = decodeURIComponent(cookie.substring(0, equalPos));
        myCookies[cookieName] = cookieValue;
    });

    let displaySection = $$("section");
    displaySection.innerHTML = "";

    ['firstName', 'lastName', 'username', 'password'].forEach(key => {
        let p = document.createElement("p");
        if (myCookies[key]) {
            p.textContent = `${key}: ${myCookies[key]}`;
            displaySection.appendChild(p);
        }
 
    });

}

$$("#register").addEventListener("click", registerForm);
addEventListener('load', onLoad);

