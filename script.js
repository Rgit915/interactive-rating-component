const stars = document.querySelectorAll('.star');
let selectedRating = null;
const errorMessage = document.getElementById('error-message');

stars.forEach(star => {
  star.addEventListener('click', () => {
    // Remove active class from all stars
    stars.forEach(s => s.classList.remove('active'));

    // Add active class to the clicked star
    star.classList.add('active');

    // Set the selected rating
    selectedRating = star.getAttribute('data-value');

    // Hide the error message once a rating is selected
    errorMessage.style.visibility = 'hidden';
    errorMessage.textContent = ''; // Clear any previous error text
  });
});

document.getElementById('submit').addEventListener('click', () => {
  if (selectedRating) {
    // Create the thank you message with the selected rating
    const thankYouCard = `
      <div class="container thank-you">
        <div class="card">
          <img src="./images/illustration-thank-you.svg" alt="illustration"/>
          <p class="selected">You selected ${selectedRating} out of 5</p>
          <h2>Thank you!</h2>
          <p>We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!</p>
        </div>
      </div>`;

    // Replace the current body content with the thank you message
    document.body.innerHTML = thankYouCard;

  } else {

    // Display the error message if no rating is selected
    errorMessage.textContent = 'Please select a rating.';
    errorMessage.style.visibility = 'visible';

  }
});
