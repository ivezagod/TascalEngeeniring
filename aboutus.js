

function animateCounters() {
    const counters = document.querySelectorAll('.text-6xl');

    counters.forEach(counter => {
        const finalValue = parseInt(counter.getAttribute('data-final-value'));
        const duration = 2000; // 2 seconds
        let currentValue = 0;
        const increment = finalValue / (duration / 50);

        const interval = setInterval(() => {
            currentValue += increment;
            counter.textContent = Math.floor(currentValue);

            if (currentValue >= finalValue) {
                clearInterval(interval);
                counter.textContent = finalValue;
            }
        }, 50);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const options = {}; // Define your options object if needed

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const counterSection = document.getElementById('counterSection');
    if (counterSection) { // Check if counterSection is not null
        observer.observe(counterSection);
    } else {
        console.error("Element with ID 'counterSection' not found.");
    }
});



function resetSliderRemove() {
    slider.removeChild(slider.firstElementChild);
    slider.appendChild(slider.firstElementChild.cloneNode(true));
}

let slider = document.querySelector('.slider');

// Function to reset the slider after the animation ends
function resetSliderAnimation() {
    resetSliderRemove();
}

// Add animation end event listener to reset the slider
slider.addEventListener('animationiteration', resetSliderAnimation);

function resetSlider2() {
    slider2.appendChild(slider2.firstElementChild.cloneNode(true));
}

function resetSliderRemove2() {
    slider2.removeChild(slider2.firstElementChild);
    slider2.appendChild(slider2.firstElementChild.cloneNode(true));
}

let slider2 = document.querySelector('.slider2');

// Function to reset the slider after the animation ends
function resetSliderAnimation2() {
    resetSliderRemove2();
}

// Add animation end event listener to reset the slider
slider.addEventListener('animationiteration', resetSliderAnimation2);

// Initial reset
resetSlider();
resetSlider2()

document.addEventListener('DOMContentLoaded', function() {
    const referenceContainer = document.querySelector('.max-w-picture');
    const paginationContainer = document.getElementById('pagination');
    const itemsPerPage = 4; // Adjust as needed
    let currentPage = 1;

    function displayReferences(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const referenceItems = Array.from(referenceContainer.children);

        referenceItems.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function generatePagination() {
        const totalItems = referenceContainer.children.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;

            if (i === currentPage) {
                pageLink.classList.add('active');
            }

            pageLink.addEventListener('click', () => {
                currentPage = i;
                displayReferences(currentPage);
                updatePaginationUI();
            });

            paginationContainer.appendChild(pageLink);
        }
    }

    function updatePaginationUI() {
        const pageLinks = Array.from(paginationContainer.children);

        pageLinks.forEach((link, index) => {
            if (index === currentPage - 1) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    displayReferences(currentPage);
    generatePagination();
});
















