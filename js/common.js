// Scroll reveal animation
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveals() {
  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => revealObserver.observe(el));
}
observeReveals();

// Back to top button
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 500);
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- Page transition ----------
const pageFade = document.querySelector('.page-fade');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('a[href$=".html"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || link.target === '_blank') return;

    e.preventDefault();
    const url = link.getAttribute('href');

    if (reduceMotion) {
      window.location.href = url;
      return;
    }

    pageFade.classList.add('leaving');
    setTimeout(() => (window.location.href = url), 450);
  });
});

// Reset the curtain when the browser back button restores a cached page
window.addEventListener('pageshow', (e) => {
  if (e.persisted) pageFade.classList.remove('leaving');
});
