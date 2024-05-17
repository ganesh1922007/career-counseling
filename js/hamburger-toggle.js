const hamburgerToggle = document.querySelector('#hamburger-toggle');
const navbar = document.querySelector("#navbar");
const toggleSwitch = document.querySelector(".checkbox");

// Function to close navbar if screen width > 770px
function closeNavbarIfLargeScreen() {
    if (window.innerWidth > 770) {
        navbar.classList.remove("open");
        toggleSwitch.style.display = 'block'; // Ensure toggle is visible when navbar is closed
    }
}

// Event listener for window resize event
window.addEventListener('resize', closeNavbarIfLargeScreen);

// JavaScript for hamburger menu toggle
hamburgerToggle.addEventListener("click", function() {
    navbar.classList.toggle("open");
});
