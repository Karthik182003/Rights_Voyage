var currentSlide = 0;
var slides = document.querySelectorAll("#slideshow img");

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].style.display = "none";
        currentSlide++;
        slides[currentSlide].style.display = "block";
    } else {
        // Reached the end of the slideshow
        alert("You've reached the end of the module!");
    }
}

function completeModule() {
    // You can add any actions you want to perform when the user completes the module
    alert("Congratulations! You've completed the module.");
}

// Show the first slide initially
slides[currentSlide].style.display = "block";