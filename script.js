let currentSlide = 0;
const slides = document.querySelectorAll('.slider');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
