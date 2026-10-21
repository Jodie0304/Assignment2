// Mobile menu + navbar background on scroll
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---------- Dark / light toggle ----------
const themeBtn = document.querySelector('.theme-btn');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeBtn.innerHTML = theme === 'dark' ? '&#9728;' : '&#9790;';
  themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

  try {
    localStorage.setItem('theme', theme);
  } catch (e) {
    // storage not available, theme just won't be remembered
  }
}

setTheme(document.documentElement.dataset.theme || 'dark');

themeBtn.addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});
