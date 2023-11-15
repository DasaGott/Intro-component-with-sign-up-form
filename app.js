let loginForm =
  document.getElementById("login-form");
loginForm.addEventListener(
  "submit",
  handlesubmit
);

function handlesubmit(event) {
  event.preventDefault();
  const firstName =
    document.getElementById("fname").value;
  const lastName =
    document.getElementById("lname").value;
  const email =
    document.getElementById("email").value;
  const password =
    document.getElementById("password");

  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    password == ""
  ) {
    trowErrorMessage();
  } else {
    alert("Thank you for submition");
  }
}

function trowErrorMessage() {
  const inputFields = document.querySelectorAll(
    ".input-field"
  );

  inputFields.forEach((input, idx) => {
    input.classList.add("error");

    const errorMessage =
      document.querySelectorAll(".error-text");
    errorMessage[
      idx
    ].innerHTML = `${input.placeholder} cannot be empty`;

    input.placeholder = "!";
  });
}
