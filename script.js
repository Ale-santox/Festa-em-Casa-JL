const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let autoSlideInterval;

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}
function updateCarousel() {
    const offset = currentIndex * -100;
    carousel.style.transform = `translateX(${offset}%)`;
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 4000);
}

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', () => {
    prevSlide();
});
nextButton.addEventListener('click', () => {
    nextSlide();
});

autoSlideInterval = setInterval(nextSlide, 4000);

