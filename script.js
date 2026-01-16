// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                                    target.scrollIntoView({
                                                        behavior: 'smooth',
                                                        block: 'start'
                                    });
                    }
        });
});

// Add scroll animation for elements
const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
                    if (entry.isIntersecting) {
                                    entry.target.style.opacity = '1';
                                    entry.target.style.transform = 'translateY(0)';
                    }
        });
}, observerOptions);

// Observe service cards and steps
document.querySelectorAll('.service-card, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
});

// Button click handlers
document.querySelectorAll('.btn-cta, .btn-large').forEach(btn => {
        btn.addEventListener('click', function() {
                    // Open consultation booking modal or redirect to booking page
                                     console.log('Consultation booking initiated');
                    // You can replace this with your actual booking system URL
                                     // window.location.href = 'https://your-booking-system.com';
                                     alert('Thank you for your interest! A consultation specialist will contact you shortly.');
        });
});
