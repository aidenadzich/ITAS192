const elUsername = document.querySelector("#username");
const elFirstname = document.querySelector("#fName");
const elLastname = document.querySelector("#lName");
const elForm = document.querySelector("#myForm");

const checkForm = function(e) {
    let msgTarget = document.querySelector("#btnSub").nextSibling;
    msgTarget.textContent = '';
    if ((elUsername.value === "") || (elFirstname.value === "") || (elLastname.value === "")) {
        e.preventDefault();
        msgTarget.textContent = " Please complete all fields";
    }
}

const checkField = function(e, minLength) {
    let target = e.target;
    let msgTarget = target.nextSibling;
    let msg = '';
    let isValid = true;
    if (target.value.length < minLength) {
        isValid = false;
        msg = 'Field too short';
    }
    msgTarget.textContent = msg;
    return isValid;
}

elUsername.addEventListener('blur', function(e) { checkField(e, 6) })
elFirstname.addEventListener('blur', function(e) { checkField(e, 2) })
elLastname.addEventListener('blur', function(e) { checkField(e, 2) })


elForm.addEventListener('submit', checkForm);