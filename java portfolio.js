// Smooth scroll effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Form validation and submission
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple email validation
    const email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Form submission logic (you can customize this part, e.g., send data to server)
    // For demonstration purposes, simply show a success message
    successMessage.textContent = 'Message sent successfully!';
    contactForm.reset();
});

function isValidEmail(email) {
    // Very basic email validation, you can use a regex or a more sophisticated method
    return /\S+@\S+\.\S+/.test(email);
}
