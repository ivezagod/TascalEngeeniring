document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery .image-container img");

    const slider = document.querySelector(".picture-slider");
    const sliderImg = slider.querySelector("img");
    const closeBtn = slider.querySelector(".close");
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    let currentIndex = 0;

    // Check if images are being selected
    console.log("Images selected:", images);  // Debugging line

    // Open slider when clicking an image
    window.addEventListener("DOMContentLoaded", (event) => {
        const images = document.querySelectorAll(".gallery img");
        console.log("Gallery images found:", images);
        images.forEach((img) => {
            img.addEventListener("click", function () {
                const slider = document.querySelector(".picture-slider");
                const sliderImg = slider.querySelector("img");
                sliderImg.src = this.src;
                slider.style.display = "flex";
            });
        });
    });

    // Close slider
    closeBtn.addEventListener("click", function () {
        slider.style.display = "none";
    });

    // Next Image
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        sliderImg.src = images[currentIndex].src;
    });

    // Previous Image
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        sliderImg.src = images[currentIndex].src;
    });

    // Close slider when clicking outside the image
    slider.addEventListener("click", function (event) {
        if (event.target === slider) {
            slider.style.display = "none";
        }
    });
});