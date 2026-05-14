document.addEventListener('DOMContentLoaded', () => {
    
    // Hamburger Menu Animation
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    
    // Form Validation

    const contactForm = document.getElementById('contact-form');
    const feedbackBox = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            
            const nameField = document.getElementById('user-name');
            const emailField = document.getElementById('user-email');
            const msgField = document.getElementById('user-msg');
            
            
            feedbackBox.className = 'feedback-message';
            feedbackBox.style.display = 'none';

            
            if (!nameField.value.trim() || !emailField.value.trim() || !msgField.value.trim()) {
                feedbackBox.textContent = 'Validation Error: Please fill out all required fields before submitting.';
                feedbackBox.classList.add('error');
                return;
            }

            if (!emailField.value.includes('@')) {
                feedbackBox.textContent = 'Validation Error: Please include a valid email address with an "@" character.';
                feedbackBox.classList.add('error');
                return;
            }

            feedbackBox.textContent = 'Thank you! Your message has been validated and sent successfully.';
            feedbackBox.classList.add('success');
            
            contactForm.reset();
        });
    }
});
