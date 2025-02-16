document.addEventListener('DOMContentLoaded', function() {
    var circle = document.querySelector('.circle');
    var words = document.querySelector('.words');
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;

    // Add animation class to circle and words on page load
    circle.classList.add('show');
    words.classList.add('show');

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
});