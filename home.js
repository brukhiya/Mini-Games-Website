document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const nameInput = document.querySelector('input[type="text"]');
    const thankYouMessage = document.getElementById('thank-you-message');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
      }
      // Show the thank you message with the user's name
      thankYouMessage.textContent = `Thank you, ${nameInput.value} we will get back to you shortly!`;
      // Clear the form
      form.reset();
   });
    function isValidEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });














