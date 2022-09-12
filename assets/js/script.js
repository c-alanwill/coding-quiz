// Variables
var body = document.body;
var startEl = document.getElementById("start-button");
var timerEl = document.getElementById('countdown');
var containerEl = document.querySelector('#page-one');
var questionEl = document.querySelector('#question');
var allDoneEl = document.querySelector('#all-done');
var highScoreEl = document.querySelector('#high-score');

// Timer that counts down from 75
function countdown() {
    var timeLeft = 75;
    containerEl.classList.add("hidden");
    questionEl.classList.remove("hidden");
    // IF YOU TAKE THESE HIDDENS AWAY THEY WON'T SHOW ON PAGE.
    allDoneEl.classList.add("hidden");
    allDoneEl.classList.remove("hidden");
    highScoreEl.classList.add("hidden");
    highScoreEl.classList.remove("hidden");
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'Time: ' + timeLeft;
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

