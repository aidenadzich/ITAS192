const $$ = sel => document.querySelector(sel);

function setValues() {
    let newDate = new Date();
    newDate.setFullYear(newDate.getFullYear() + 1);
    newDate.toUTCString();

    let hero = $$("#super").value.trim();
    let power = $$("#power").value.trim();
    let email = $$("#email").value.trim();

    hero = validateForm("hero", hero);
    power = validateForm("power", power);
    email = validateForm("email", email);

}

function validateForm(key, formValue) {
    if (formValue) {
        localStorage.setItem(key, formValue);
    } else {
        localStorage.removeItem(key);
    }
}

$$("#btn").addEventListener("click", setValues);
