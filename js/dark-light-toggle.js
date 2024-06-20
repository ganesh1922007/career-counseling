document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("toggle");
    const navbar = document.getElementById("navbar");

    toggleSwitch.style.display = 'block';

    toggleSwitch.addEventListener("change", function(){
        if(this.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('preferredTheme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('preferredTheme', 'light');
        }
    });

    applyPreferredTheme();

    function applyPreferredTheme() {
        const preferredTheme = localStorage.getItem('preferredTheme');
        if (preferredTheme === 'dark') {
            toggleSwitch.checked = true;
            document.body.classList.add('dark');
        } else {
            toggleSwitch.checked = false;
            document.body.classList.remove('dark');
        }
    }
});
