const buttonLogin = document.querySelector('#enter');
const buttonSend = document.querySelector('#submit-btn');
const checkBoxAgreement = document.querySelector('#agreement');

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

function enable() {
  if (checkBoxAgreement.checked) {
    buttonSend.disabled = false;
  } else {
    buttonSend.disabled = true;
  }
}

checkBoxAgreement.addEventListener('click', enable);
