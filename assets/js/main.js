// Typing animation
const heroHi = document.getElementById('hero-hi');
let typingPhrases = [
  'Eu sou Jose Guilherme',
  'Desenvolvedor Full Stack',
  'Especialista Mobile',
  'Bem-vindo ao meu portfólio'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimer = null;

function typeLoop() {
  const current = typingPhrases[phraseIndex];

  if (!isDeleting) {
    heroHi.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      typeTimer = setTimeout(typeLoop, 2000);
      return;
    }
    typeTimer = setTimeout(typeLoop, 70);
  } else {
    heroHi.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % typingPhrases.length;
      typeTimer = setTimeout(typeLoop, 400);
      return;
    }
    typeTimer = setTimeout(typeLoop, 40);
  }
}

function restartTyping(newPhrases) {
  clearTimeout(typeTimer);
  typingPhrases = newPhrases;
  phraseIndex = 0;
  charIndex = 0;
  isDeleting = false;
  heroHi.textContent = '';
  typeLoop();
}

typeLoop();

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 50);
});

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close mobile menu on link click
nav.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header__link');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Counter animation
const counters = document.querySelectorAll('.stats__number');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      let current = 0;
      const increment = target / 40;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 30);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// Fade-in on scroll
const fadeElements = document.querySelectorAll(
  '.service-card, .work-card, .timeline__item, .skill-card, .contact__item'
);

fadeElements.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeElements.forEach(el => fadeObserver.observe(el));

// Works filter
const filterBtns = document.querySelectorAll('.works__filter-btn');
const workCards = document.querySelectorAll('.work-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    workCards.forEach(card => {
      if (filter === 'all' || card.dataset.category.includes(filter)) {
        card.classList.remove('hidden');
        card.classList.add('fade-in', 'visible');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Contact form (mailto fallback)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject') || 'Contato via Portfólio';
  const message = formData.get('message');

  const body = `Nome: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href = `mailto:zecampos2015@yahoo.com.br?subject=${encodeURIComponent(subject)}&body=${body}`;
});
