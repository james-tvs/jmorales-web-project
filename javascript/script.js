document.addEventListener('DOMContentLoaded', () => {
    const mustangForm = document.getElementById('mustangForm');
    const banner = document.getElementById('welcomeBanner');

    if (mustangForm) {
        mustangForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const userName = document.getElementById('userName').value;
            const favModel = document.getElementById('favModel').value;

            banner.innerHTML = `🏁 Welcome to the Crew, ${userName}! Your ${favModel} is registered.`;
            
            banner.className = "visible-banner";

            window.scrollTo({ top: 0, behavior: 'smooth' });

            mustangForm.reset();
        });
    }
});

