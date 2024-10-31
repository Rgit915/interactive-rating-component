const stars = document.querySelectorAll('.star');
let selectedRating = null;
const errorMessage = document.getElementById('error-message');
const submitBtn = document.getElementById('submit');

function showError() {
  errorMessage.textContent = 'Please select a rating.';
  errorMessage.style.visibility = 'visible';
}

function hideError() {
  errorMessage.style.visibility = 'hidden';
  errorMessage.textContent = '';
}

function handleStarClick(star) {
  // Remove active class from all stars
  stars.forEach(s => s.classList.remove('active'));
  // Add active class to the clicked star
  star.classList.add('active');
  // Set the selected rating and hide any error message
  selectedRating = star.getAttribute('data-value');
  hideError();
}

function showThankYouMessage() {
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

  document.body.innerHTML = thankYouCard;
}

// Initialize star click event listeners
stars.forEach(star => {
  star.addEventListener('click', () => handleStarClick(star));
});

// Submit button event listener
submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    showThankYouMessage();
  } else {
    showError();
  }
});
