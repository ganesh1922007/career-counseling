document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById("toggle");
    const navbar = document.getElementById("navbar");

    // Ensure toggle is initially visible
    toggleSwitch.style.display = 'block';

    // Event listener for theme toggle switch
    toggleSwitch.addEventListener("change", function(){
        if(this.checked) {
            // Add 'dark' class to body when switch is checked (dark mode)
            document.body.classList.add('dark');
            // Store theme preference in local storage
            localStorage.setItem('preferredTheme', 'dark');
        } else {
            // Remove 'dark' class from body when switch is unchecked (light mode)
            document.body.classList.remove('dark');
            // Store theme preference in local storage
            localStorage.setItem('preferredTheme', 'light');
        }
    });

    // Apply preferred theme when the page loads
    applyPreferredTheme();

    function applyPreferredTheme() {
        const preferredTheme = localStorage.getItem('preferredTheme');
        if (preferredTheme === 'dark') {
            // Apply dark theme if preferred theme is 'dark'
            toggleSwitch.checked = true;
            document.body.classList.add('dark');
        } else {
            // Apply light theme by default or if preferred theme is 'light'
            toggleSwitch.checked = false;
            document.body.classList.remove('dark');
        }
    }
});
