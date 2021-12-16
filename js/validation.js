const form = document.querySelector('#form');
const email = document.querySelector('#email');
const errorContainer = document.querySelector('.error-msg');
const text = 'Put email in lower case and try again';
const message = document.createElement('h4');
errorContainer.appendChild(message);
message.innerText = text;
message.style.color = '#36b37e';
message.style.background = '#fff';
message.style.fontWeight = '600';
message.style.visibility = 'hidden';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const checkValidation = () => {
    const Validmail = email.value.toLowerCase();
    if (email.value !== Validmail) {
      message.style.visibility = 'visible';
      email.style.border = '1px solid red';
    } else {
      message.style.visibility = 'hidden';
      email.style.border = null;
    }
  };
  checkValidation();
});