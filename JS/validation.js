const form = document.querySelector('.contact-form');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + .error');

// const emailRegx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

email.addEventListener('input', (event) => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'Email can\'t be empty';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'You need to enter a valid email address';
  } else if (email.validity.patternMismatch || email !== email.lowerCase()) {
    emailError.textContent = 'Please type for email with lowercase letters';
  }
  emailError.className = 'email-error active';
}