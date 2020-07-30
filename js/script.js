const form = document.querySelector('#form');
const fullName = document.querySelector('#name');
const fullEmail = document.querySelector('#email');
const password = document.querySelector('#password');

// FUNCTIONS

function showError(input, message) {
    // adding error class
    const formControl = document.querySelector('#form-control');
    formControl.classList.add('error');

    // adding error message
    const small = document.querySelector('#small');
    small.innerText = message;
}

function showSuccess(input) {
        // adding success class
        const formControl = document.querySelector('#form-control');
        formControl.classList.add('success');
}


function checkLength(e) {
    // pausing the submit to show interaction
    e.preventDefault();

    // defining inputs
    const name = fullName.value;
    const email = fullEmail.value;

    // checking length
    if (name === '') {
        showError(fullName, 'please enter your name')
    } else {
        showSuccess(fullName);
    }
}

// EVENT LISTENERS

form.addEventListener('submit', checkLength);