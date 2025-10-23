// Configuration des animations au scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Désinscrire l'élément après l'animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer tous les éléments animés
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Effet subtil au scroll sur le hero
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
        hero.style.opacity = 1 - (scrolled * 0.002);
    }
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Animation des boutons
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Changement de l'opacité de la navbar au scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Gestion du modal de contact
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');

// Ouvrir le modal
contactBtn.addEventListener('click', () => {
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Empêcher le défilement
});

// Fermer le modal
closeModal.addEventListener('click', () => {
    contactModal.classList.remove('active');
    document.body.style.overflow = ''; // Réactiver le défilement
});

// Fermer le modal en cliquant en dehors
contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});