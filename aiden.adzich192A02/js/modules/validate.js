import User from '../classes/User.js';

let $$ = document.querySelector.bind(document);
let users = [];

document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = $$('input[name="firstName"]');
    const lastNameInput = $$('input[name="lastName"]');
    const usernameInput = $$('input[name="username"]');
    const emailInput = $$('input[name="email"]');
    const phoneInput = $$('input[name="phoneNumber"]');
    const operatingSystemInputs = document.querySelectorAll('input[name="operatingSystem"]');
    const agreedTerms = $$('input[name="agreedTerms"]');
    const provinceInput = $$('select[name="province"]'); 
    const registerButton = $$('button[name="register"]');
    const userList = $$('div#userList'); 


    firstNameInput.addEventListener('input', function() {
        validateName(firstNameInput);
    });

    lastNameInput.addEventListener('input', function() {
        validateName(lastNameInput);
    });

    usernameInput.addEventListener('input', function() {
        validateUsername(usernameInput);
    });

    emailInput.addEventListener('input', function() {
        validateEmail(emailInput);
    });

    phoneInput.addEventListener('input', function() {
        validatePhone(phoneInput);
    });

    registerButton.addEventListener('click', function(event) {
        console.log('Register button clicked');
        event.preventDefault();
    
        const selectedOperatingSystem = Array.from(operatingSystemInputs).find(input => input.checked)?.value || '';
        const formattedPhoneNumber = formatPhoneNumber(phoneInput.value);
    
        if (!validateForm(firstNameInput, lastNameInput, usernameInput, emailInput, phoneInput, operatingSystemInputs, provinceInput)) {
            console.log('Form validation failed');
            return;
        }

        if (users.some(user => user.username === usernameInput.value)) {
            console.log('Duplicate username detected');
            displayError(usernameInput, 'This username is already taken.');
            return;
        }
    
        console.log('Form validation passed');
    
        const newUser = new User(
            firstNameInput.value,
            lastNameInput.value,
            usernameInput.value,
            emailInput.value,
            formattedPhoneNumber,
            selectedOperatingSystem,
            agreedTerms.checked,
            provinceInput.value
        );
    
        console.log('New user created:', newUser);
    
        users.push(newUser);
        users.sort((a, b) => a.getFullName().localeCompare(b.getFullName()));
        userList.innerHTML = '';
        users.forEach(user => displayUser(user, userList));
    
        console.log('User added to list');
    
        firstNameInput.value = '';
        lastNameInput.value = '';
        usernameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        operatingSystemInputs.forEach(input => input.checked = false);
        agreedTerms.checked = false;
        provinceInput.value = '';
    });

});

function displayUser(user, userList) {
    const userFields = `
        <div class="grid grid-cols-[2fr,2fr,3fr,2fr,2fr,1fr,1fr] gap-0 text-gray-300 p-4 border-b border-gray-600">
            <div class="text-center border-r border-gray-600">${user.getFullName()}</div>
            <div class="text-center border-r border-gray-600">${user.username}</div>
            <div class="text-center border-r border-gray-600">${user.email}</div>
            <div class="text-center border-r border-gray-600">${user.phoneNumber}</div>
            <div class="text-center border-r border-gray-600">${user.getProvinceName()}</div>
            <div class="text-center border-r border-gray-600">${user.operatingSystem}</div>
            <div class="text-center">${user.agreedTerms ? "Yes" : "No"}</div>
        </div>
    `;
    userList.insertAdjacentHTML('beforeend', userFields);
}

function displayError(input, message) {
    const errorSpan = input.nextElementSibling;
    if (errorSpan) {
        errorSpan.textContent = message;
    }
}

export function validateName(input) {
    const namePattern = /^[A-Za-z]{1,19}[-']?[A-Za-z]{1,19}$/;
    const isValid = namePattern.test(input.value);

    if (!isValid) {
        const message = 'Please enter a valid name.';
        displayError(input, message);
        return false;
    } else {
        displayError(input, '');
        return true;
    }
}

export function validateUsername(input) {
    const usernamePattern = /^[A-Z][0-9]{3}.{4}$/;
    const isValid = usernamePattern.test(input.value);

    if (!isValid) {
        const message = 'Username must start with an uppercase letter, followed by 3 digits and 4 characters.';
        displayError(input, message);
        return false;
    } else {
        displayError(input, '');
        return true;
    }
}

export function validateEmail(input) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailPattern.test(input.value);

    if (!isValid) {
        const message = 'Please enter a valid email address.';
        displayError(input, message);
        return false;
    } else {
        displayError(input, '');
        return true;
    }
}

export function validatePhone(input) {
    const phonePattern = /^(\(\d{3}\)\s|\d{3}[-.])\d{3}[-.]\d{4}$/;
    const isValid = phonePattern.test(input.value);

    if (!isValid) {
        const message = 'Phone number must be in the format (XXX) XXX-XXXX, XXX-XXX-XXXX, or XXX.XXX.XXXX.';
        displayError(input, message);
        return false;
    } else {
        displayError(input, '');
        return true;
    }
}

function formatPhoneNumber(phoneNumber) {
    const digits = phoneNumber.replace(/\D/g, '');
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

export function validateOperatingSystem(operatingSystemInputs) {
    const container = operatingSystemInputs[0].closest('div.space-x-4');
    const errorSpan = container.parentElement.querySelector('span.text-red-500');

    const isSelected = Array.from(operatingSystemInputs).some(input => input.checked);

    if (!isSelected) {
        const message = 'Please select an operating system.';
        if (errorSpan) {
            errorSpan.textContent = message;
        }
        return false;
    } else {
        if (errorSpan) {
            errorSpan.textContent = '';
        }
        return true;
    }
}


export function validateProvince(provinceInput) {
    const isValid = provinceInput.value !== '';

    if (!isValid) {
        const message = 'Please select a province.';
        displayError(provinceInput, message);
        return false;
    } else {
        displayError(provinceInput, '');
        return true;
    }
}

export function validateForm(firstNameInput, lastNameInput, usernameInput, emailInput, phoneInput, operatingSystemInputs, provinceInput) {
    const isFirstNameValid = validateName(firstNameInput);
    const isLastNameValid = validateName(lastNameInput);
    const isUsernameValid = validateUsername(usernameInput);
    const isEmailValid = validateEmail(emailInput);
    const isPhoneValid = validatePhone(phoneInput);
    const isOperatingSystemValid = validateOperatingSystem(operatingSystemInputs);
    const isProvinceValid = validateProvince(provinceInput);

    return isFirstNameValid &&
           isLastNameValid &&
           isUsernameValid &&
           isEmailValid &&
           isPhoneValid &&
           isOperatingSystemValid &&
           isProvinceValid;
}