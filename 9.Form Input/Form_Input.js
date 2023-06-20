/**
9.JS DOM Working with Form Input:
Implement a webpage with a form that has the following fields:
a. Name (text input)
b. Email (email input)
c. Password (password input)
d. Confirm Password (password input)
e. Submit (button)
Implement JavaScript validation for the form fields:
f. Name should not be empty and should contain only letters.
g. Email should be a valid email address.
h. Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.
i. Confirm Password should match the Password field.
j. Display appropriate error messages for invalid fields.

 */

const form = document.getElementById("formValidate");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formValidation();
});

function formValidation() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const cPassword = document.getElementById("cPassword").value;

  // Get Errors Fields
  let nameError = document.querySelector(".nameError");
  let emailError = document.querySelector(".emailError");
  let passError = document.querySelector(".passError");
  let cPassError = document.querySelector(".cPassError");
  nameError.textContent = "";
  emailError.textContent = "";
  passError.textContent = "";
  cPassError.textContent = "";
  // Name Field
  const namePattern = /[A-Za-z]+/;

  if (name === "") {
    nameError.textContent = "Name is required.";
  } else if (!namePattern.test(name)) {
    nameError.textContent = "Name should contain only letters.";
  } else {
    nameError.textContent = "";
  }

  // Email
  const mailFormat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
  } else if (!mailFormat.test(email)) {
    emailError.textContent = "Please input valid email";
  }

  //Password
  const length = /^.{8,}$/;
  const uppercase = /(?=.*[A-Z])/;
  const lowercase = /(?=.*[a-z])/;
  const specialChar = /(?=.*[!@#$%^&*])/;

  if (password === "") {
    passError.textContent = "Password is required.";
  } else if (!length.test(password)) {
    passError.textContent = "Minimum length of 8 characters";
  } else if (!uppercase.test(password)) {
    passError.textContent = "At least one uppercase letter";
  } else if (!lowercase.test(password)) {
    passError.textContent = "At least one lowercase letter";
  } else if (!specialChar.test(password)) {
    passError.textContent =
      "Password should contain at least one special character (!@#$%^&*).";
  }

  // Confirm Password
  if (cPassword === "") {
    cPassError.textContent = "Confirm Password is required.";
  } else if (cPassword != password) {
    cPassError.textContent = "Password didn't match.";
  }
}
