document.addEventListener("DOMContentLoaded", () => {

const image = document.querySelectorAll('.slide');

image.forEach(slide => {
    const h2 = slide.querySelector('h2');
    h2.style.color = '#fff';
    h2.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.8)';
})

}); 