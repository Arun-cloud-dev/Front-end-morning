// Get references to form and form input elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Function to show error messages for form inputs
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Function to show success indication for form inputs
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Function to check if an email is valid using a regular expression
function checkEmail(input) {
  // Regular expression to validate email format
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
  if (re.test(input.value.trim())) {
    // If the email is valid, show a success indication
    showSucces(input);
  } else {
    // If the email is invalid, show an error message
    showError(input, "Email is not valid");
  }
}

// Function to check if required fields are filled out
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      // If a field is empty, show an error message
      showError(input, `${getFieldName(input)} is required`);
    } else {
      // If a field is filled, show a success indication
      showSucces(input);
    }
  });
}

// Function to check the length of an input against a specified range
function checkLength(input, min, max) {
  if (input.value.length < min) {
    // If the input is too short, show an error message
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    // If the input is too long, show an error message
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    // If the input is within the valid range, show a success indication
    showSucces(input);
  }
}

// Function to get the field name with the first letter capitalized
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Function to check if the password and confirm password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    // If passwords don't match, show an error message
    showError(input2, "Passwords do not match");
  }
}

// Event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Perform various checks and validations when the form is submitted
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
