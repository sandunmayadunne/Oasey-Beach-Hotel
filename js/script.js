document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    mobileMenuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuIcon.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuIcon.querySelector('i').classList.remove('fa-times');
            mobileMenuIcon.querySelector('i').classList.add('fa-bars');
        });
    });

    // Mobile Dropdown Toggle
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    mobileDropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.mobile-dropbtn');
        dropbtn.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });
    });

    // 3. Scroll Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
