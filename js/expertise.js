// Practice areas: click a card to expand or close it
const areas = document.querySelectorAll('.area');

function toggleArea(area) {
  const isOpen = area.classList.toggle('open');
  area.querySelector('.area-head').setAttribute('aria-expanded', isOpen);
}

areas.forEach((area) => {
  area.querySelector('.area-head').addEventListener('click', () => toggleArea(area));
});

// Open the area from the link, e.g. expertise.html#family-law
if (location.hash) {
  const target = document.querySelector(location.hash);
  if (target && target.classList.contains('area')) toggleArea(target);
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });
});

// Clicking an overview card opens its practice area below
window.addEventListener('hashchange', () => {
  const target = document.querySelector(location.hash);
  if (target && target.classList.contains('area') && !target.classList.contains('open')) {
    toggleArea(target);
  }
});
