// Initialize the slideIndex variable to 1 and show the first slide
let slideIndex = 1;
showSlides(slideIndex);

// Function for changing slides forward or backward
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function for showing a specific slide by its index
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Function to change slide every 2 seconds
function autoSlide() {
  plusSlides(1);
}
let slideInterval = setInterval(autoSlide, 2000);

// Main function to display slides and handle slide navigation
function showSlides(n) {
  // Declare variables
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Get all elements with class "mySlides"
  let dots = document.getElementsByClassName("demo"); // Get all elements with class "demo"
  let captionText = document.getElementById("caption"); // Get the element with the id "caption"

  // If n is greater than the number of slides, reset slideIndex to 1
  if (n > slides.length) {
    slideIndex = 1;
  }

  // If n is less than 1, set slideIndex to the last slide
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides and gradually fade them out
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots (thumbnails)
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide by setting its display property to "block"

  slides[slideIndex - 1].style.display = "block";

  // Display the current slide with a fade-in effect
  let opacity = 0;
  let fadeInterval = setInterval(function () {
    opacity += 0.05; // Adjust the increment to control fade speed
    slides[slideIndex - 1].style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(fadeInterval);
    }
  }, 20); // Adjust the interval for smoother animation

  // Add the "active" class to the dot (thumbnail) corresponding to the current slide
  dots[slideIndex - 1].className += " active";

  // Update the caption text to match the alt text of the current dot (thumbnail)
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
