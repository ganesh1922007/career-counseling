const observer = new IntersectionObserver((entries) => {
    let delay = 0; // Initial delay
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, delay);
            delay += 1000;
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
