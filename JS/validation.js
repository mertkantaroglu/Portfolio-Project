// const form = document.querySelector('.contact-form');
// const email = document.getElementById('email');
// // const emailError = document.querySelector('#email + .email-error');
// const emailError = document.querySelector('.email-error');

// // const emailRegx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

// email.addEventListener('input', (event) => {
//   if (email.validity.valid) {
//     emailError.textContent = '';
//     emailError.className = 'email-error';
//   } else {
//     showError();
//   }
// });

// function showError() {
//   if (email.validity.valueMissing) {
//     emailError.textContent = 'Email can\'t be empty';
//   } else if (email.validity.typeMismatch) {
//     emailError.textContent = 'You need to enter a valid email address';
//   } else if (email !== email.lowerCase()) {
//     email.textContent = 'Email can only be in lower cases';
//   }

//   emailError.className = 'email-error active';
// }

// form.addEventListener('submit', (event) => {
//   if (!email.validity.valid) {
//     showError();
//     event.preventDefault();
//   }
// });


const contactForm = document.querySelector('#form');
const errorMessage = document.querySelector('#error-message');


contactForm.addEventListener('submit', (event) => {
  const email = contactForm.elements.email.value;

  if (email !== email.toLowerCase()) {
    event.preventDefault();
    errorMessage.innerHTML = 'Email field only can include lowercase characters.';
    errorMessage.classList.remove('hidden');
  } else {
    errorMessage.classList.add('hidden');
  }
});