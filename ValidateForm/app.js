var username = document.querySelector("#username");
var password = document.querySelector("#pass");
var email = document.querySelector("#email");
var repassword = document.querySelector("#repass");
var form = document.querySelector("form");

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add("error");
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove("error");
    small.innerText = "";
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(function (input) {
        input.value = input.value.trim();
        if (input.value.length == 0) {
            isEmptyError = true;
            showError(input, `${input.name} is required`);
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmailError(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);

    regexEmail.test(input.value) ? showSuccess(input) : showError(input, "Email is not valid");
    return isEmailError;
}

function checkLengthError(input, min, max) {
    let isLengthError = false;
    input.value = input.value.trim();
    if (input.value.length < min) {
        isLengthError = true;
        showError(input, `${input.name} must be at least 6 characters`);
    }
    else if (input.value.length > max) {
        isLengthError = true;
        showError(input, `${input.name} must have less than 20 characters `);
    }
    else {
        showSuccess(input);
    }
    return isLengthError;
}

function checkPassword(pass, repass) {
    let isPasswordError = false;
    if (pass.value !== repass.value) {
        isPasswordError = true;
        showError(repass, "Password is not match");
    }
    else {
        showSuccess(repass);
    }
    return isPasswordError;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isEmptyError = checkEmptyError([username, password, email, repassword]);
    let ischeckEmailError = checkEmailError(email);
    let ischeckLengthError = checkLengthError(username, 6, 20);
    let ischeckPasswordError = checkPassword(password, repassword);
})