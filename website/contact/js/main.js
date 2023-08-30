document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', submitContactForm);
});

function submitContactForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Thank you for your message. We will get back to you soon.');
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}