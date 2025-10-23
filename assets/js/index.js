// Configuration de l'Intersection Observer pour les animations au scroll
const animateOnScroll = (entries) => {
    // Active l'animation pour chaque élément visible
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

// Création de l'observer avec un seuil de 10% de visibilité
const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1
});

// Observer pour les cartes
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Observer pour les sections
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

// Effet parallaxe sur le hero
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Animation du titre
const animateText = (element) => {
    const text = element.textContent;
    element.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.05}s`;
        span.classList.add('animate-character');
        element.appendChild(span);
    }
};

// Animer les titres des cartes
document.querySelectorAll('.card h3').forEach(title => {
    title.addEventListener('mouseenter', () => {
        animateText(title);
    });
});

// Effet de hover sur les boutons
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Changement de couleur du navbar au scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});