document.addEventListener('DOMContentLoaded', () => {
    const careerOptions = [
        { title: 'Aerospace Engineering', description: 'Explore careers in aerospace engineering, including aircraft design, space exploration, and more.', url: 'https://drive.google.com/file/d/182A022vEXHYovyXzWpSdmTBOCjrSjSu8/view?usp=drive_link' },
        { title: 'Fintech', description: 'Discover opportunities in financial technology, including innovations in banking, investment, and financial services.', url: 'https://drive.google.com/file/d/1bu1QrJIH_6BN6EARR43PezozeW1ncWMq/view?usp=drive_link' },
        { title: 'Landscape Architecture', description: 'Learn about careers in landscape architecture, focusing on designing outdoor spaces and environmental planning.', url: 'https://drive.google.com/file/d/1HU6zAZ0H3Q3oXR-i09dUtJ3o3aBelzAC/view?usp=drive_link' },
        { title: 'Environmental Engineering', description: 'Explore careers in environmental engineering, including work on sustainability, pollution control, and resource management.', url: 'https://drive.google.com/file/d/10SVpHwIaHKNFopVY3y5hjIZukhCs-zaj/view?usp=drive_link' },
        { title: 'Architecture', description: 'Find out about careers in architecture, focusing on building design, urban planning, and construction management.', url: 'https://drive.google.com/file/d/1Hk220TFgoL25o4NIdHrFOFDgxzIMT3AP/view?usp=drive_link' },
        { title: 'Doctors and Physicians', description: 'Learn about careers in medicine, including various specialties, patient care, and medical research.', url: 'https://drive.google.com/file/d/1-IPmZ8KK7F3ejngD_5EqPXRq--2PiZfP/view?usp=drive_link' },
        { title: 'Mechanical Engineering', description: 'Discover opportunities in mechanical engineering, including machinery design, manufacturing processes, and thermal systems.', url: 'https://drive.google.com/file/d/1Kfjid1IFKUp3AqxwMxxgaXjnyJboxEIJ/view?usp=drive_link' },
        { title: 'Nursing', description: 'Explore careers in nursing, focusing on patient care, medical procedures, and various healthcare settings.', url: 'https://drive.google.com/file/d/1gV_bFUPRu5AeqLbpANFxkx9XXWwySMlj/view?usp=drive_link' },
        { title: 'Data Science', description: 'Explore careers in data science, focusing on data analysis, machine learning, and statistical methods.', url: 'https://drive.google.com/file/d/1OjfB5a0gxcAlU4onI2rNvpAlqwP2lUxL/view?usp=drive_link' },
        { title: 'Psychology', description: 'Explore careers in psychology, focusing on mental health, behavioral science, and therapeutic practices.', url: 'https://drive.google.com/file/d/1Y8iNCzzxfVmicFe-09wtQnwSD3C3IYld/view?usp=drive_link' },
        { title: 'Navigating Life After School', description: 'Find resources and guidance for life after school.', url: 'https://dsel.education.gov.in/careers/index.html' }
    ];

    const careerOptionsContainer = document.getElementById('career-options');
    const searchBar = document.getElementById('search-bar');

    // Debounce function to limit the rate of function calls
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    const renderCards = (filter = '') => {
        const fragment = document.createDocumentFragment();
        careerOptions
            .filter(option => option.title.toLowerCase().includes(filter.toLowerCase()))
            .forEach(option => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <a href="${option.url}" target="_blank" rel="noopener noreferrer">
                        <h2>${option.title}</h2>
                        <p>${option.description}</p>
                    </a>
                `;
                fragment.appendChild(card);
            });
        careerOptionsContainer.innerHTML = '';
        careerOptionsContainer.appendChild(fragment);
    };

    // Initial render
    renderCards();

    // Debounced search functionality
    searchBar.addEventListener('input', debounce((e) => {
        renderCards(e.target.value);
    }, 300)); // Adjust debounce delay as needed
});
