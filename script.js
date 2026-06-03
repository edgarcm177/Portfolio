document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Fade In/Out Scrolling Animations
       ========================================================================== */
    const observerOptions = {
        root: null,          
        rootMargin: '0px',
        threshold: 0.1       
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => scrollObserver.observe(el));


    /* ==========================================================================
       Vanilla JS Smooth Scrolling for Navigation Links
       ========================================================================== */
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            
            e.preventDefault();

            
            const targetId = this.getAttribute('href');
            
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                
                const headerOffset = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});