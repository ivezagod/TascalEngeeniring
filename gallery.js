document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img"); // Select all the images in the gallery
    const slider = document.querySelector(".picture-slider"); // The slider container
    const sliderImg = slider.querySelector("img"); // The image element inside the slider
    const closeBtn = slider.querySelector(".close"); // The close button
    const nextBtn = slider.querySelector(".next"); // The next button
    const prevBtn = slider.querySelector(".prev"); // The previous button

    let currentIndex = 0; // To keep track of the current image index

    // Open slider when clicking an image
    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            sliderImg.src = this.src; // Set the src of the slider image to the clicked image's src
            slider.style.display = "flex"; // Show the slider
            currentIndex = index; // Set current index to the clicked image's index
        });
    });

    // Close the slider when clicking the close button
    closeBtn.addEventListener("click", function () {
        slider.style.display = "none"; // Hide the slider
    });

    // Go to the next image in the gallery
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length; // Increment the index, loop back to the start if needed
        sliderImg.src = images[currentIndex].src; // Update the slider image to the next image
    });

    // Go to the previous image in the gallery
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrement the index, loop to the last image if needed
        sliderImg.src = images[currentIndex].src; // Update the slider image to the previous image
    });

    // Close the slider when clicking outside the image
    slider.addEventListener("click", function (event) {
        if (event.target === slider) {
            slider.style.display = "none"; // Hide the slider if clicked outside the image
        }
    });
});
