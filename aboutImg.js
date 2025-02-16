document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", function() {
        const body = document.body;
        const navbar = document.getElementById("navbar");

        // Hide navbar and prevent scrolling
        body.classList.add("no-scroll");
        navbar.classList.add("hide-navbar");

        // Create full-screen overlay
        const overlay = document.createElement("div");
        overlay.classList.add("fixed", "top-0", "left-0", "w-full", "h-full", "bg-black", "flex", "items-center", "justify-center", "z-50");

        // Clone clicked image
        const fullscreenImg = this.cloneNode();
        fullscreenImg.classList.add("max-w-full", "max-h-full");

        overlay.appendChild(fullscreenImg);
        document.body.appendChild(overlay);

        // Exit fullscreen on click
        overlay.addEventListener("click", function() {
            body.classList.remove("no-scroll");
            navbar.classList.remove("hide-navbar");
            overlay.remove();
        });
    });
});
