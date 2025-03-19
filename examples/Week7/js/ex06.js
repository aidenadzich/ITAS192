const elUsername = document.querySelector("#username");
const elFirstname = document.querySelector("#fName");
const elLastname = document.querySelector("#lName");
const elForm = document.querySelector("#myForm");

let checkField = function(e, minLength) {
    let target = e.target;
    let msgTarget = target.nextSibling;
    let msg = "";
    let isValid = true;
    if (target.value.length < minLength) {
        isValid = false;
        switch (target.id) {
            case "username": 
                msg = "Username";
                break;
            case "fName":
                msg="Firstname";
                break;
            case "lName":
                msg="Lastname";
                break;
            default:
                msg="Unknown field";
        }
        msg += " is too short";
    }
    msgTarget.textContent = msg;
    return isValid;
}

let checkForm = function(e) {
//		let msgTarget = e.target.nextSibling;
    let msgTarget = document.querySelector("#btnSub").nextSibling;
    msgTarget.textContent = "";
    if (elUsername.value === "" || elFirstname.value === "" || elLastname.value === "") {
        e.preventDefault();
        msgTarget.textContent = "   Please complete all fields";
    }




}

elUsername.addEventListener('blur',e => checkField(e,6));
elFirstname.addEventListener('blur',e => checkField(e,3));
elLastname.addEventListener('blur',function(e) {checkField(e,2);});

elForm.addEventListener('submit',checkForm,false);


