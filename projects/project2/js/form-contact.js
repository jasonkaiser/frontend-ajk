// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const responseMessage = document.getElementById('responseMessage');

    // Simulate an AJAX request with a timeout
    setTimeout(() => {
        // Randomly decide whether the submission is successful or fails
        const success = Math.random() > 0.5; // 50% chance of success

        responseMessage.className = ''; // Reset classes
        responseMessage.textContent = ''; // Reset text content

        if (success) {
            responseMessage.textContent = 'Form submitted successfully!';
            responseMessage.classList.add('success');
        } else {
            responseMessage.textContent = 'An error occurred while submitting the form.';
            responseMessage.classList.add('error');
        }
    }, 1000); // Simulate a 1-second network delay
});