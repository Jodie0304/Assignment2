const articles = [
  {
    title: 'Understanding Your Rights as a Tenant',
    text: 'Learn about the important terms and conditions to review before signing a contract to protect your rights and avoid future disputes.',
    image: 's.png'
  },
  {
    title: 'How Mediation Can Save Time and Money',
    text: 'Discover the basic rights and responsibilities of tenants, including rental agreements, security deposits and resolving disputes with landlords.',
    image: 'Become_a_Lawyer.jpeg.png'
  },
  {
    title: 'Key Clauses to Check Before Signing a Contract',
    text: 'Find out how mediation can help people resolve disagreements peacefully, reduce legal costs and avoid lengthy court proceedings.',
    image: 'Rectangle-544-1-1.png'
  }
];

const list = document.getElementById('article-list');

articles.forEach((a) => {
  list.insertAdjacentHTML('beforeend', `
    <article class="glass article reveal">
      <img src="${a.image}" alt="${a.title}" loading="lazy">
      <div class="article-body">
        <h3>${a.title}</h3>
        <p>${a.text}</p>
      </div>
    </article>
  `);
});

observeReveals();
