// Example JavaScript (form validation)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            // Handle the form submission (e.g., send data to a server)
            alert('Thank you for subscribing!');
            form.reset();
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});
