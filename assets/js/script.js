// Variables
var body = document.body;
var h1El = document.createElement("h1");
var directionsEl = document.createElement("div");
var startEl = document.createElement("Button");

var timerEl = document.getElementById('countdown');

// Presents first page
h1El.textContent = "Coding Quiz Challenge";
directionsEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startEl.textContent = "Start Quiz";

// Timer that counts down from 5
function countdown() {
    var timeLeft = 75;
  
// Attach event listener to Start Quiz button element and call a function to be executed every 1000 milliseconds
startEl.addEventListener("click", function() {
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
    // Call the `displayMessage()` function
    displayMessage();
}
}, 1000);
}

// First page of questions


// Call Functions
countdown();


// Append
body.appendChild(h1El);
body.appendChild(directionsEl);
body.appendChild(startEl);

h1El.setAttribute("style", "margin:auto; margin-top: 70px; text-align:center;");
directionsEl.setAttribute("style", "margin: auto; margin-top: 30px; font-size: 18px; text-align:center; max-width: 520px;");
// startEl.setAttribute('style', 'width: 130px; height: 30px; background-color: purple; text-align: center; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); margin-top: 90px;');
// startEl.setAttribute('style', 'width: 130px; height: 30px; background-color: purple; text-align: center; position: absolute; margin: auto; margin-top: 30px; '); 
startEl.setAttribute('style', 'width: 130px; height: 30px; background-color: purple; margin: auto; margin-top: 24px; color: white; font-size: 15px; border-radius: 4px; border: none;');


// Create ordered list element for questions.

// Clicking on start button on first page.

// Start timer

// Advance to next page if user gets question correct.

// Time is subtracted from timer if user gets question wrong.

// When timer reachs 0 quiz is over and user saves initils and sees score.