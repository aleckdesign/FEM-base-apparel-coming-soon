const form = document.querySelector(".form");
const formInputEmail = document.querySelector(".form__input");
const formError = document.querySelector(".form__error-icon");
const formErrorText = document.querySelector(".form__error-text");
const formSuccess = document.querySelector(".form__success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();
});

const validate = () => {
  const emailValue = formInputEmail.value.trim();

  console.log(checkEmail(emailValue));

  if (!checkEmail(emailValue)) {
    formInputEmail.classList.remove("valid");
    formInputEmail.classList.add("invalid");
    formError.classList.remove("hidden");
    formErrorText.classList.remove("hidden");
  } else {
    formInputEmail.classList.remove("invalid");
    formInputEmail.classList.add("valid");
    formError.classList.add("hidden");
    formErrorText.classList.add("hidden");
    formSuccess.classList.remove("hidden");
    setTimeout(function () {
      formInputEmail.value = "";
      window.location.reload();
    }, 2000);
  }
};

//////////////////////////////////
// Regex email format validation

const checkEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
