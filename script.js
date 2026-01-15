// Interactive functionality for the website
document.addEventListener('DOMContentLoaded', function() {
    const earth = document.querySelector('.earth');
    const rotateBtn = document.getElementById('rotateBtn');
    
    let isRotating = false;

    rotateBtn.addEventListener('click', function() {
        isRotating = !isRotating;
        
        if (isRotating) {
            earth.classList.add('rotating');
            rotateBtn.textContent = 'Stop Rotation';
        } else {
            earth.classList.remove('rotating');
            rotateBtn.textContent = 'Rotate the Earth!';
        }
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add card animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
