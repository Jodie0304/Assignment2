// ---------- Animated counters ----------
const counters = document.querySelectorAll('[data-count]');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const target = Number(el.dataset.count);
    let current = 0;

    const timer = setInterval(() => {
      current += Math.ceil(target / 60);
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current + '+';
    }, 25);

    counterObserver.unobserve(el);
  });
});

counters.forEach((c) => counterObserver.observe(c));

// ---------- Testimonial slider ----------
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  index = i;
  slides.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach((d, n) => d.classList.toggle('active', n === i));
}

dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

setInterval(() => showSlide((index + 1) % dots.length), 5000);
