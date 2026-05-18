// Navbar scroll opacity
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active nav link via IntersectionObserver
const sections    = document.querySelectorAll('section[id]');
const navLinkEls  = document.querySelectorAll('.nav-link');

const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinkEls.forEach(l => l.classList.remove('active'));
            const match = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (match) match.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => activeObserver.observe(s));

// Scroll-reveal for cards and other elements
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .info-item, .interest-item, .award-item').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});
