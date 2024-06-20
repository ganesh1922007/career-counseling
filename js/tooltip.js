document.addEventListener("DOMContentLoaded", function() {
    const tooltip = document.getElementById("tooltip");
    const tooltipShown = localStorage.getItem("tooltipShown");

    if (!tooltipShown) {
        tooltip.classList.remove("hidden");
    }

    document.addEventListener("click", function() {
        if (!tooltip.classList.contains("hidden")) {
            tooltip.classList.add("hidden");
            localStorage.setItem("tooltipShown", "true");
        }
    });
});
