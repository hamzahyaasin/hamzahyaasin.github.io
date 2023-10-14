// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Perform form submission or validation here
  // You can use AJAX or fetch to send form data to a server
  // or display an alert message to indicate successful submission
  alert('Form submitted successfully!');
});
