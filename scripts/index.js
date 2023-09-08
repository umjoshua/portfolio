document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector(".scroll-to-top-toast");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    });

    scrollButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
