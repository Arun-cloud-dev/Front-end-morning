// // script.js
// const custAlert = document.getElementById("customAlertButton");
// const cust_alert = document.getElementById("customAlertDialog");
// const closeButton = document.getElementById("closeButton");

// custAlert.addEventListener("click", () => {
//   alert("This is a custom alert!");
//   cust_alert.style.display = "block";
    
// });

// closeButton.addEventListener("click", () => {
//   cust_alert.style.display = "none";
// });



// script.js
const custAlert = document.getElementById("customAlertButton");
const cust_alert = document.getElementById("customAlertDialog");
const closeButton = document.getElementById("closeButton");

custAlert.addEventListener("click", function() {
  cust_alert.style.display = "block";
  
  
});

closeButton.addEventListener("click", function() {
  cust_alert.style.display = "none";

  // Display a standard browser popup alert
  alert("We Received your Form!\nYou will now be redirected to Our HOME PAGE!");

  // Redirect to www.XYz.com in a new tab
  window.open("https://bit.ly/riderarun", "_blank");

});


let errorParagraph = document.getElementById("error");
console.log(errorParagraph);

function purchase() {
  console.log("button clicked");

  errorParagraph.textContent =
    "Something went Worng , So Please do not try again !";
  
  
  // Clear the error message after 5 seconds
  setTimeout(function() {
    errorParagraph.textContent = "";
  }, 3000); // 3000 milliseconds = 3 seconds
}

