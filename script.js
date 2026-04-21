// ===== Hero Slideshow =====
(function() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  if (slides.length <= 1) return;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  setInterval(() => goTo(current + 1), 2000);
})();

// ===== Mobile Navigation Toggle =====
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');

mobileToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileToggle.classList.toggle('active');
});

// Close nav when a link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    mobileToggle.classList.remove('active');
  });
});

// ===== Header Scroll Effect =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== Scroll to Top Button =====
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    topBtn.classList.add('visible');
  } else {
    topBtn.classList.remove('visible');
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Scroll Fade-in Animation =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in to section elements
document.querySelectorAll(
  '.about-card, .course-card, .feature-card, .instructor-card, .review-card, .info-card, .location-item'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !phone) {
    alert('이름과 연락처를 입력해주세요.');
    return;
  }

  alert(name + '님, 상담 신청이 완료되었습니다!\n담당자가 빠른 시일 내에 연락드리겠습니다.');
  contactForm.reset();
});

// ===== Active Nav Highlight on Scroll =====
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id') || '';
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active-link');
    }
  });
});
