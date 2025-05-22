document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
       
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    const h2 = slide.querySelector('h2');
    h2.style.color = '#fff';
    h2.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.8)';
});