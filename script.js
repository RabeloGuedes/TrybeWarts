const buttonLogin = document.querySelector('#enter');
const buttonSend = document.querySelector('#submit-btn');
const checkBoxAgreement = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

// Checks the email and password data.
function checkData() {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', checkData);

// Checks if the the agreement button is checked, depending on it's status, enable or diable the send button.
function enable() {
  if (checkBoxAgreement.checked) {
    buttonSend.disabled = false;
  } else {
    buttonSend.disabled = true;
  }
}

checkBoxAgreement.addEventListener('click', enable);

// Checks the number os characters and update the counter.
function typing() {
  const textareaValue = textarea.value;
  const characters = textareaValue.split('').length;
  counter.innerText = 500 - characters;
}

textarea.addEventListener('keyup', typing);
