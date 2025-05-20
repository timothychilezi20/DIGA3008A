document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.letterbox-image');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightboxOverlay.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', () => {
        lightboxOverlay.classList.add('hidden');
        lightboxImage.src = '';
    });

    
    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) {
            lightboxOverlay.classList.add('hidden');
            lightboxImage.src = '';
        }
    });

   
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightboxOverlay.classList.add('hidden');
            lightboxImage.src = '';
        }
    });
});