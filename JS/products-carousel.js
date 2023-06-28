const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const slideAmount = 3;

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - slideAmount, 0);
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + slideAmount, carouselItems.length - slideAmount);
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * (100 / slideAmount)}%)`;
    toggleButtonVisibility();
}

function toggleButtonVisibility() {
    if (currentIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    if (currentIndex >= carouselItems.length - slideAmount) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}

toggleButtonVisibility();

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('mousemove', drag);
carousel.addEventListener('touchmove', drag);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('touchend', dragEnd);

function dragStart(e) {
    e.preventDefault();
    if (e.type === 'touchstart') {
        startPos = e.touches[0].clientX;
    } else {
        startPos = e.clientX;
    }
    isDragging = true;
    carousel.classList.add('grabbing');
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();
    let currentPosition = 0;
    if (e.type === 'touchmove') {
        currentPosition = e.touches[0].clientX;
    } else {
        currentPosition = e.clientX;
    }
    currentTranslate = prevTranslate + currentPosition - startPos;
}

function dragEnd() {
    isDragging = false;
    carousel.classList.remove('grabbing');
    if (currentTranslate > 0) {
        currentIndex = Math.max(currentIndex - slideAmount, 0);
    } else if (currentTranslate < 0) {
        currentIndex = Math.min(currentIndex + slideAmount, carouselItems.length - slideAmount);
    }
    updateCarousel();
    prevTranslate = currentTranslate;
}