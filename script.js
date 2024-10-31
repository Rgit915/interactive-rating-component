const stars = document.querySelectorAll('.star');
let selectedRating = null;

stars.forEach(star => {
  star.addEventListener('click', () => {
    // Remove active class from all stars
    stars.forEach(s => s.classList.remove('active'));

    // Add active class to the clicked star
    star.classList.add('active');

    // Set the selected rating
    selectedRating = star.getAttribute('data-value');

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

    console.log('Please select a rating.');

  }
});
