function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}


// regex pattern 



// You can validate the format using regular expressions (regex) or 
// use built -in email validation functions in programming languages.


// What is the regex code for email validation in JavaScript?
// The regex code for email validation in JavaScript is:
// /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/


// const gmailvalidate = /^[a-zA-Z\d\.-]+@gmail\.com$/;

// const emailToValidate = "example@gmail.com";
// if (gmailvalidate.test(emailToValidate)) {
//   console.log("Valid Gmail address.");
// } else {
//   console.log("Not a valid Gmail address.");
// }