document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.letterbox-image');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const caption = document.getElementById('lightbox-caption');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    let currentIndex = 0;

    const showImage = (index) => {
        const img = images[index];
        lightboxImage.src = img.src;
        caption.textContent = img.getAttribute('data-caption') || '';
        lightboxOverlay.classList.remove('hidden');
        currentIndex = index;
    };

    images.forEach((img, index) => {
        img.addEventListener('click', () => showImage(index));
    });

    const closeLightbox = () => {
        lightboxOverlay.classList.add('hidden');
        lightboxImage.src = '';
        caption.textContent = '';
    };

    closeBtn.addEventListener('click', closeLightbox);

    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowRight') nextImage();
        else if (e.key === 'ArrowLeft') prevImage();
    });

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
});
