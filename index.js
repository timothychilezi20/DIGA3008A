document.addEventListener("DOMContentLoaded", () => {
    const goToPage = {
        GoToBlogs: "Blogs/BlogHomePage.html",
        GoToProfile: "Profile/AboutMePage.html",
        GoToDesign: "DesignSection/DesignHomepage.html",
        GoToEssay: "Essays/EssaysHomepage.html",
        GoToPortfolio: "Portfolio/Portfolio.html"
    }

    Object.keys(goToPage).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener("click", () => {
                window.location.href = goToPage[buttonId];
            });
        }
    });

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length; 

function showSlide(index) {
    slides.forEach((slide, i) => {
       slide.classList.remove('active');
       if (i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide(){
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlides(currentSlide);
}

const nextBtn = document.querySelector('.nextSlide.next');
const prevBtn = document.querySelector('.previousSlide.prev');

if (nextBtn && prevBtn){
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

setInterval(nextSlide, 5000);
});

const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    const h2 = slide.querySelector('h2');
    h2.style.color = '#fff';
    h2.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.8)';
});
