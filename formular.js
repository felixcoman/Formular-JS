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

const backHome = document.querySelector("#backHome");

backHome.style.visibility = "hidden";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backHome.style.visibility = "";
  } else {
    backHome.style.visibility = "hidden";
  }
});

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
  //jos verificam daca valoarea diferita de un numar
  if (!isNaN(event.target.value)) {
    surNameError.innerHTML = `<p class="error"> EROARE NUME INTRODUS! </p>`;
  } else if (event.target.value.length < 2) {
    surNameError.innerHTML = `<p class="error"> EROARE NUME INTRODUS! </p>`;
  } else {
    surNameError.innerHTML = "";
    console.log(event.target.value);
    formResult.surname = event.target.value;
  }
});

//VERIFICARE PRENUME
nameInput.addEventListener("change", (event) => {
  //jos verificam daca valoarea diferita de un numar
  if (!isNaN(event.target.value)) {
    nameError.innerHTML = `<p class="error"> EROARE NUME INTRODUS! </p>`;
  } else if (event.target.value.length < 2) {
    nameError.innerHTML = `<p class="error"> EROARE NUME INTRODUS! </p>`;
  } else {
    nameError.innerHTML = "";
    console.log(event.target.value);
    formResult.name = event.target.value;
  }
});

//VERIFICARE E-MAIL
const pattern = /^[\w.-]+@[a-zA-Z\d.-]+.[a-zA-Z]{2,}$/;

mailInput.addEventListener("change", (event) => {
  if (pattern.test(event.target.value)) {
    formResult.mail = event.target.value;
    console.log(event.target.value);
  } else {
    mailError.innerHTML = `<p class="error"> EROARE1 E-MAIL INTRODUS ! </p>`;
  }
});

confirmMailInput.addEventListener("change", (event) => {
  mailError.innerHTML = "";
  if (pattern.test(event.target.value)) {
    mailError.innerHTML = "";
    if (event.target.value === formResult.mail) {
      mailError.innerHTML = "";
    } else {
      mailError.innerHTML = `<p class="error"> EROARE CONFIRMARE E-MAIL! </p>`;
    }
  } else {
    mailError.innerHTML = `<p class="error"> EROARE2 E-MAIL INTRODUS ! </p>`;
  }
});

//VERIFICARE PAROLA

passInput.addEventListener("click", () =>
  window.alert(
    "VĂ ROG SĂ INTRODUCEȚI O PAROLĂ CARE SĂ CONȚINĂ MINIM 6 CARACTERE"
  )
);

passInput.addEventListener("change", (event) => {
  if (event.target.value.length >= 6) {
    formResult.pass = event.target.value;
    console.log(event.target.value);
  } else {
    passError.innerHTML = `<p class="error"> PAROLA E PREA SCURTĂ! PAROLA TREBUIE SĂ CONȚINĂ MĂCAR 6 CARACTERE </p>`;
  }
});

confirmPassInput.addEventListener("change", (event) => {
  passError.innerHTML = "";
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

const patternPhone = /^0{2}[4]0[0-9]{3,9}$/;

phoneInput.addEventListener("click", () =>
  window.alert(
    "VĂ ROG SĂ INTRODUCEȚI UN NUMĂR DE TELEFON CU ACEST FORMAT 0040xxxxxxxxx"
  )
);

phoneInput.addEventListener("change", (event) => {
  // //jos verificam daca valoarea nu este numar - not a number - NaN
  // if (isNaN(event.target.value)) {
  //   phoneError.innerHTML = `<p class="error"> EROARE NUMAR TELEFON INTRODUS! </p>`;
  // } else if (event.target.value.length !== 13) {
  //   phoneError.innerHTML = `<p class="error"> EROARE NUMAR TELEFON INTRODUS! </p>`;
  // } else {
  //   phoneError.innerHTML = "";
  //    console.log(event.target.value);
  //   formResult.phone = event.target.value;
  // }
  if (isNaN(event.target.value)) {
    phoneError.innerHTML = `<p class="error"> EROARE NUMAR TELEFON INTRODUS! </p>`;
  } else if (patternPhone.test(event.target.value)) {
    console.log(event.target.value);
    formResult.phone = event.target.value;
    phoneError.innerHTML = "";
  } else {
    phoneError.innerHTML = `<p class="error"> EROARE NUMAR TELEFON INTRODUS! </p>`;
  }
});

//VERIFICARE VARSTA

ageInput.addEventListener("change", (event) => {
  if (event.target.value >= 18) {
    ageInputError.innerHTML = "";
    console.log(event.target.value);
    formResult.age = event.target.value;
  } else {
    ageInputError.innerHTML = `<p class="error"> NE PARE RĂU, DAR TREBUIE SĂ AVEȚI CEL PUȚIN 18 ANI PENTRU A TRIMITE O RECLAMAȚIE! </p>`;
  }
});

//VERIFICARE GDPR

//console.log(gdprCheck.checked); //gdprCheck.checked foloseste direct valoarea booleana din checkbox fara a mai declara un boolean separat. !!verifica inainte de interactiunea cu checkboxul ca este false!!

gdprCheck.addEventListener("change", (event) => {
  if (!event.target.checked) {
    gdprError.innerHTML = `<p class="error"> PENTRU A CONTINUA TREBUIE SĂ ACCEPTAȚI TERMENII ȘI CONDIȚIILE! </p>`;
  } else {
    gdprError.innerHTML = "";
  }
  formResult.checked = event.target.checked;
  console.log(event.target.checked);
});

//VERIFICARE RECLAMATIE

//console.log(`^^^${messageInput.value}^^^${typeof messageInput.value}^^^`); //messageInput.value returneaza "" daca reclamatia este goala - se poate folosi ca un boolean !!verifica inainte de interactiunea cu textarea ca este false!!

messageInput.addEventListener("change", (event) => {
  if (!event.target.value) {
    messageInputError.innerHTML = `<p class="error"> NU SE POATE VALIDA O RECLAMAȚIE GOALĂ! </p>`;
  } else {
    messageInputError.innerHTML = "";
    formResult.mess = event.target.value;
  }
});

//BUTON BACK HOME

let funcBackHome = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

backHome.addEventListener("mousedown", funcBackHome);

//ACTIUNE SUBMIT

let formCompl = (object) => {
  let completat = true;
  for (const key in object) {
    if (object[key] === "") {
      completat = false;
    }
  }
  return completat;
};

submitAction.addEventListener("click", (event) => {
  //preventDefault previne sa dea refresh la pagină când este submis fromularul pentru a putea afisa rezultatele in consola
  event.preventDefault();
  let completat = formCompl(formResult);
  if (gdprCheck.checked && messageInput.value && completat) {
    messageInputError.innerHTML = "";
    gdprError.innerHTML = "";
    submitMessage.innerHTML = `<p class="message"> RECLAMAȚIA A FOST ÎNREGISTRATĂ CU SUCCES! O SĂ REVENIM CU UN RĂSPUNS ÎN CEL MULT 30 DE ZILE CALENDARISTICE! </p>`;
    console.log(formResult);
  } else if (gdprCheck.checked && completat) {
    messageInputError.innerHTML = `<p class="error"> RECLAMAȚIA E GOALĂ! </p>`;
  } else if (completat) {
    gdprError.innerHTML = `<p class="error"> PENTRU A CONTINUA TREBUIE SĂ ACCEPTAȚI TERMENII ȘI CONDIȚIILE! </p>`;
  } else {
    messageInputError.innerHTML = `<p class="error"> VĂ RUGĂM SĂ COMPLETAȚI TOATE DATELE! </p>`;
  }
});
