let loginForm =
  document.getElementById("login-form");
loginForm.addEventListener(
  "submit",
  handlesubmit
);

const inputFields =
  document.querySelectorAll(".inputs");
inputFields.forEach((input) => {
  input.addEventListener("input", handleInput);
});

function handlesubmit(event) {
  event.preventDefault();
  const firstName =
    document.getElementById("fname").value;
  const lastName =
    document.getElementById("lname").value;
  const email =
    document.getElementById("email").value;
  const password =
    document.getElementById("password").value;

  if (
    firstName == "" ||
    lastName == "" ||
    password == ""
  ) {
    trowErrorMessage();
  }

  if (
    email.trim() == "" ||
    !isValidEmail(email)
  ) {
    const emailField =
      document.getElementById("email");
    emailField.classList.add("error");

    const errorMessage = document.querySelector(
      ".error-text-email"
    );
    errorMessage.innerHTML = `Looks like this is not an email`;

    emailField.placeholder = "email@example/com";
  } else {
    const emailField =
      document.getElementById("email");
    emailField.classList.remove("error");
    emailField.placeholder = "Email Adress";

    loginForm.reset();

    alert("Thank you for submitting");
  }
}

function isValidEmail(email) {
  const emailValidation =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailValidation.test(email);
}

function trowErrorMessage() {
  const inputFields = document.querySelectorAll(
    ".input-field"
  );

  inputFields.forEach((input, idx) => {
    const inputValue = input.value.trim();
    if (inputValue === "") {
      input.classList.add("error");

      const errorMessage =
        document.querySelectorAll(".error-text");
      errorMessage[
        idx
      ].innerHTML = `${input.placeholder} cannot be empty`;

      input.removeAttribute("placeholder");
    } else {
      input.classList.remove("error");

      const errorMessage =
        document.querySelectorAll(".error-text");
      errorMessage[idx].innerHTML = "";
    }
  });
}

function handleInput(event) {
  event.preventDefault();
  const input = event.target;
  const errorMessage = input.nextElementSibling;

  input.classList.remove("error");
  errorMessage.innerHTML = "";
}
