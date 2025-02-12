// input form elements
const $$ = (e) => document.querySelector(e);

const elName = $$("#surname");
const elChk1 = $$("#chk1");
const elChk2 = $$("#chk2");
const elChkArray = document.querySelectorAll("[name=varCheck");
const elRadioArray = document.querySelectorAll("[name=gender");
const elDrop = $$("#ddlGet");
const elSubmit = $$("#btnSub");

// output elements
const chkOut = $$("#outCheck");
const dropOut = $$("#outDrop");

const showValues = function() {
    // get value from text box
    let surnameVal = elName.value;
    $$("#outName").textContent = surnameVal;

    let isCheckBoxChecked = elChk1.value;
    $$("#outEmail").textContent = isCheckBoxChecked;
    $$("#outTwit").textContent = elChk2.value;

    $$("#outEmail").textContent += ` has ${((elChk1.checked) ? "" : "not")} been checked`
    $$("#outTwit").textContent += ` has ${((elChk2.checked) ? "" : "not")} been checked`

    // Radio buttons
    let i = 0;
    let doLoop = true;
    while((i < elRadioArray.length) && (doLoop)) {
        if (elRadioArray[i].checked) {
            $$("#outRadio").textContent = elRadioArray[i].value;
            doLoop = false;
        }
        i += 1;
    }

    // DDl
    dropOut.innerHTML = `Value is ${elDrop.options[elDrop.selectedIndex].value} and Text is ${elDrop.options[elDrop.selectedIndex].text} <br> Value from DDL is ${elDrop.value}`;
}

elSubmit.addEventListener("click", showValues);
