const elForm = document.querySelector('#formSignup'); 
const elSelectPackage = document.querySelector('#package');
const elPackageHint  = document.querySelector('#packageHint');
const elTerms  = document.querySelector('#terms');
const elTermsHint = document.querySelector('#termsHint');

let checkTerms = function(e) {
    if (!elTerms.checked) {
        elTermsHint.innerHTML = "You must agree to the terms";
        e.preventDefault();
    }
}

let packageHint = function(e) {
    let target = e.target;
    let pack = target.options[this.selectedIndex].value;
    if (pack === "monthly") {
        elPackageHint.innerHTML = 'Save $10 if you pay annually';
    } else {
        elPackageHint.innerHTML = "Good choice";
    }
}

elForm.addEventListener('submit', checkTerms);
elSelectPackage.addEventListener('change', packageHint);