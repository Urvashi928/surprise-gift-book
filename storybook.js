let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Optional: Allow arrow key navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Initial slide setup
showSlide(currentSlide);
// Highlight clicked photo
document.querySelectorAll('.photo-grid img').forEach((img) => {
  img.addEventListener('click', () => {
    document.querySelectorAll('.photo-grid img').forEach(i => i.classList.remove('active'));
    img.classList.add('active');
  });
});
