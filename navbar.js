document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    let scrollPosition = window.scrollY;

    // Update navbar on scroll
    window.addEventListener('scroll', function() {
        scrollPosition = window.scrollY;

        if (scrollPosition > 150) {
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-[#192436]');
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('bg-[#192436]');
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('scrolled');
        }
    });

    const servicesLink = document.getElementById('servicesLink');
    const servicesDropdown = document.getElementById('servicesDropdown');
    const burgerServicesLink = document.getElementById('burgerServicesLink');
    const burgerServicesDropdown = document.getElementById('burgerServicesDropdown');

    // Toggle the services dropdown on desktop
    servicesLink.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling to document
        servicesDropdown.classList.toggle('hidden');
    });

    // Toggle the services dropdown on mobile
    burgerServicesLink.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event bubbling to document
        burgerServicesDropdown.classList.toggle('hidden');
    });

    // Close dropdowns when clicking outside of them
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('#servicesDropdown') && !target.closest('#servicesLink')) {
            servicesDropdown.classList.add('hidden');
        }
        if (!target.closest('#burgerServicesDropdown') && !target.closest('#burgerServicesLink')) {
            burgerServicesDropdown.classList.add('hidden');
        }
    });

    // Toggle the burger menu dropdown
    const burgerMenu = document.getElementById('burgerMenu');
    const burgerDropDown = document.getElementById('burgerDropDown');
    burgerMenu.addEventListener('click', function() {
        burgerDropDown.classList.toggle('hidden');
    });

    // Close burger menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('#burgerDropDown') && !target.closest('#burgerMenu')) {
            burgerDropDown.classList.add('hidden');
        }
    });
});
