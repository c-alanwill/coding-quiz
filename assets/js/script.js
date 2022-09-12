// Variables
var body = document.body;
var startEl = document.getElementById("start-button");
var timerEl = document.getElementById('countdown');

// Timer that counts down from 75
function countdown() {
    var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

// Call Functions
startEl.addEventListener("click", countdown)
countdown();

// First list of questions




// Create ordered list element for questions.

// Clicking on start button on first page.

// Start timer

// Advance to next page if user gets question correct.

// Time is subtracted from timer if user gets question wrong.

// When timer reachs 0 quiz is over and user saves initils and sees score.


// // First list of questions




// Create ordered list element for questions.

// Clicking on start button on first page.

// Start timer

// Advance to next page if user gets question correct.

// Time is subtracted from timer if user gets question wrong.

// When timer reachs 0 quiz is over and user saves initils and sees score.

