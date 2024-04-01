const surNameInput = document.querySelector("#surNameInput");
const surNameError = document.querySelector("#surNameError");
const nameInput = document.querySelector("#nameInput");
const nameError = document.querySelector("#nameError");

const phoneInput = document.querySelector("#phoneInput");
const phoneError = document.querySelector("#phoneError");

const mailInput = document.querySelector("#mailInput");
const confirmMailInput = document.querySelector("#confirmMailInput");
const mailError = document.querySelector("#mailError");

const passInput = document.querySelector("#passInput");
const confirmPassInput = document.querySelector("#confirmPassInput");
const passError = document.querySelector("#passError");

const ageInput = document.querySelector("#ageInput");
const ageInputError = document.querySelector("#ageInputError");

const gdprCheck = document.querySelector("#gdprCheck");
const gdprError = document.querySelector("#gdprError");

const messageInput = document.querySelector("#messageInput");
const messageInputError = document.querySelector("#messageInputError");

const submitMessage = document.querySelector("#submitMessage");

const formResult = {
  surname: "",
  name: "",
  mail: "",
  pass: "",
  phone: "",
  age: "",
  checked: "",
  mess: "",
};

const submitAction = document.getElementById("submitAction");

//VERIFICARE NUME
surNameInput.addEventListener("change", (event) => {
  console.log(event);
  //jos verificam daca valoarea diferita de un numar
  if (!isNaN(event.target.value)) {
    surNameError.innerHTML = `<p class="error"> EROARE NUME INTRODUS! </p>`;
  } else if (event.target.value.length < 2) {
    surNameError.innerHTML = `<p class="error"> EROARE NUME INTRODUS! </p>`;
  } else {
    surNameError.innerHTML = "";
    console.log(
      "Valoarea este egala cu acest nume:",
      event.target.value,
      event.target.value.length
    );
    formResult.surname = event.target.value;
  }
});

//VERIFICARE PRENUME
nameInput.addEventListener("change", (event) => {
  console.log(event);
  //jos verificam daca valoarea diferita de un numar
  if (!isNaN(event.target.value)) {
    nameError.innerHTML = `<p class="error"> EROARE NUME INTRODUS! </p>`;
  } else if (event.target.value.length < 2) {
    nameError.innerHTML = `<p class="error"> EROARE NUME INTRODUS! </p>`;
  } else {
    nameError.innerHTML = "";
    console.log(
      "Valoarea este egala cu acest nume:",
      event.target.value,
      event.target.value.length
    );
    formResult.name = event.target.value;
  }
});

//VERIFICARE E-MAIL
const pattern = /^[\w.-]+@[a-zA-Z\d.-]+.[a-zA-Z]{2,}$/;

mailInput.addEventListener("change", (event) => {
  if (pattern.test(event.target.value)) {
    mailError.innerHTML = "";
    formResult.mail = event.target.value;
  } else {
    mailError.innerHTML = `<p class="error"> EROARE E-MAIL INTRODUS! </p>`;
  }
});

confirmMailInput.addEventListener("change", (event) => {
  if (pattern.test(event.target.value)) {
    mailError.innerHTML = "";
    if (event.target.value === formResult.mail) {
      mailError.innerHTML = "";
    } else {
      mailError.innerHTML = `<p class="error"> EROARE CONFIRMARE E-MAIL! </p>`;
    }
  } else {
    mailError.innerHTML = `<p class="error"> EROARE E-MAIL INTRODUS! </p>`;
  }
});

//VERIFICARE PAROLA

passInput.addEventListener("change", (event) => {
  if (event.target.value.length >= 6) {
    passError.innerHTML = "";
    formResult.pass = event.target.value;
  } else {
    passError.innerHTML = `<p class="error"> PAROLA E PREA SCURTĂ! PAROLA TREBUIE SĂ CONȚINĂ MĂCAR 6 CARACTERE </p>`;
  }
});

confirmPassInput.addEventListener("change", (event) => {
  if (event.target.value.length >= 6) {
    passError.innerHTML = "";
    if (event.target.value === formResult.pass) {
      passError.innerHTML = "";
    } else {
      passError.innerHTML = `<p class="error"> EROARE CONFIRMARE PAROLĂ! </p>`;
    }
  } else {
    passError.innerHTML = `<p class="error"> PAROLA E PREA SCURTĂ! PAROLA TREBUIE SĂ CONȚINĂ MĂCAR 6 CARACTERE </p>`;
  }
});

//VERIFICARE NR TELEFON
phoneInput.addEventListener("change", (event) => {
  console.log(event);
  //jos verificam daca valoarea nu este numar - not a number - NaN
  if (isNaN(event.target.value)) {
    phoneError.innerHTML = `<p class="error"> EROARE NUMAR TELEFON INTRODUS! </p>`;
  } else if (event.target.value.length !== 13) {
    phoneError.innerHTML = `<p class="error"> EROARE NUMAR TELEFON INTRODUS! </p>`;
  } else {
    phoneError.innerHTML = "";
    console.log(
      "Valoarea este egala cu acest numar:",
      event.target.value,
      event.target.value.length
    );
    formResult.phone = event.target.value;
  }
});

//VERIFICARE VARSTA

ageInput.addEventListener("change", (event) => {
  if (event.target.value >= 18) {
    ageInputError.innerHTML = "";
    formResult.age = event.target.value;
  } else {
    ageInputError.innerHTML = `<p class="error"> NE PARE RĂU, DAR TREBUIE SĂ AVEȚI CEL PUȚIN 18 ANI PENTRU A TRIMITE O RECLAMAȚIE! </p>`;
  }
});

//VERIFICARE GDPR

let check = false;

gdprCheck.addEventListener("change", (event) => {
  if (!event.target.checked) {
    check = false;
    gdprError.innerHTML = `<p class="error"> PENTRU A CONTINUA TREBUIE SĂ ACCEPTAȚI TERMENII ȘI CONDIȚIILE! </p>`;
  } else {
    check = true;
    gdprError.innerHTML = "";
    formResult.checked = event.target.checked;
  }
});

let message = false;

messageInput.addEventListener("change", (event) => {
  if (!event.target.value) {
    message = false;
    messageInputError.innerHTML = `<p class="error"> NU PUTEȚI VALIDA O RECLAMAȚIE GOALĂ! </p>`;
  } else {
    message = true;
    messageInputError.innerHTML = "";
    formResult.mess = event.target.value;
  }
});

//ACTIUNE SUBMIT
submitAction.addEventListener("click", (event) => {
  //preventDefault previna sa dea refresh la pagină când este submis fromularul pentru a putea afisa rezultatele in consola
  event.preventDefault();
  if (check && message) {
    submitMessage.innerHTML = `<p class="message"> RECLAMAȚIA A FOST ÎNREGISTRATĂ CU SUCCES! O SĂ REVENIM CU UN RĂSPUNS ÎN CEL MULT 30 DE ZILE CALENDARISTICE! </p>`;
    console.log(formResult);
  } else if (check) {
    messageInputError.innerHTML = `<p class="error"> NU PUTEȚI VALIDA O RECLAMAȚIE GOALĂ! </p>`;
  } else {
    gdprError.innerHTML = `<p class="error"> PENTRU A CONTINUA TREBUIE SĂ ACCEPTAȚI TERMENII ȘI CONDIȚIILE! </p>`;
  }
});
