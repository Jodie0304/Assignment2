// Contact form validation (no backend)
const form = document.getElementById('contact-form');
const successBox = document.getElementById('success');

function setError(id, message) {
  const field = document.getElementById(id).closest('.field') || document.getElementById(id).parentElement;
  field.classList.toggle('invalid', Boolean(message));
  document.getElementById(id + '-error').textContent = message;
  return !message;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.elements['name'].value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const area = form.area.value;
  const message = form.message.value.trim();

  const results = [
    setError('name', name.length < 2 ? 'Please enter your full name.' : ''),
    setError('email', /^\S+@\S+\.\S+$/.test(email) ? '' : 'Please enter a valid email address.'),
    setError('phone', /^[+\d\s-]{7,}$/.test(phone) ? '' : 'Please enter a valid phone number.'),
    setError('area', area ? '' : 'Please choose a practice area.'),
    setError('message', message.length < 10 ? 'Please write at least 10 characters.' : ''),
    setError('consent', form.consent.checked ? '' : 'Please accept the consent to continue.')
  ];

  if (results.every(Boolean)) {
    successBox.classList.add('show');
    form.reset();
  } else {
    successBox.classList.remove('show');
  }
});
