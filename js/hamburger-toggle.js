const hamburgerToggle = document.querySelector('#hamburger-toggle');
const navbar = document.querySelector("#navbar");
const toggleSwitch = document.querySelector(".checkbox");

function closeNavbarIfLargeScreen() {
    if (window.innerWidth > 770) {
        navbar.classList.remove("open");
        toggleSwitch.style.display = 'block';
    }
}

window.addEventListener('resize', closeNavbarIfLargeScreen);

hamburgerToggle.addEventListener("click", function() {
    navbar.classList.toggle("open");
});
