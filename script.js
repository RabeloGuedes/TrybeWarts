const buttonLogin = document.querySelector('#enter');
const buttonSend = document.querySelector('#submit-btn');
const checkBoxAgreement = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
const evaluationForm = document.querySelector('#evaluation-form');
const name = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');

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

// Return the selected house
function selectedHouse() {
  const house = document.querySelector('#house').value;
  return house;
}

// Return the selected family
function selectedFamily() {
  const families = document.querySelectorAll('input[name="family"]');
  let family = '';
  for (let index = 0; index < families.length; index += 1) {
    if (families[index].checked) {
      family = families[index].value;
    }
  }
  return family;
}

// Return an array of technologies, which wanted to be learned
function technologies() {
  const technologiesList = document.querySelectorAll('.subject');
  const selectedTechnologies = [];
  for (let index = 0; index < technologiesList.length; index += 1) {
    if (technologiesList[index].checked) {
      selectedTechnologies.push(technologiesList[index].value);
    }
  }
  return selectedTechnologies.join(', ');
}

// Return the selected note
function note() {
  const rate = document.querySelectorAll('input[name="rate"]');
  let selectedNote = '';
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      selectedNote += rate[index].value;
    }
  }
  return selectedNote;
}

// Save the form's inputs values and reset the form
function save() {
  const values = [`${name.value} ${lastName.value}`, inputEmail.value,
    selectedHouse(), selectedFamily(), technologies(), note(), textarea.value];
  const keys = ['Nome:', 'Email:', 'Casa:', 'Família:', 'Matérias:', 'Avaliação:', 'Observações:'];
  window.localStorage.setItem('form', values);
  evaluationForm.innerHTML = '';
  for (let index = 0; index < values.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${keys[index]} ${values[index]}`;
    evaluationForm.appendChild(paragraph);
  }
  evaluationForm.style.backgroundColor = '#4CA791';
  evaluationForm.style.borderRadius = '25px';
  evaluationForm.style.padding = '25px';
}

buttonSend.addEventListener('click', save);
