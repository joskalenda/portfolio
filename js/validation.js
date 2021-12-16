const form = document.querySelector('#form');
const email = document.querySelector('#email');
const errorContainer = document.querySelector('.error-msg');
const text = 'Enter lower case then try again';
const message = document.createElement('h4');
errorContainer.appendChild(message);
message.innerText = text;
message.style.color = 'red';
message.style.background = 'white';
message.style.fontWeight = '400';
message.style.fontSize = '17px';
message.style.visibility = 'hidden';

form.addEventListener('submit', e => {
  e.preventDefault();
  checkValidation();
});

const checkValidation = () => {
   const Valid_mail = email.value.toLowerCase();
  if (email.value !== Valid_mail) {
    message.style.visibility = 'visible';
    email.style.border = '1px solid red' 
  } else {
    message.style.visibility = 'hidden';
    email.style.border = null;
  } 
}