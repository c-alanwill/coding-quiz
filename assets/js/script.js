// Variables
var body = document.body;
var startEl = document.getElementById('start-button');
var timerEl = document.getElementById('countdown');
var containerEl = document.querySelector('#page-one');
var questionEl = document.querySelector('#question');
var allDoneEl = document.querySelector('#all-done');
var highScoreEl = document.querySelector('#high-score');

var userChoices = document.getElementById('question');
var questions = [
  {
    question: "Commonly used data types DO NOT Include: ____________."
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: 3
  },
  {
    question: "The condition in an if / else statement is enclosed within ____________."
    choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    answer: 2
  },
  {
    question: "Arrays in JavaScript can be used to store ____________."
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]
    answer: 3
  },
  {
    question: "String values must be enclosed within ____________ when being assigned to variables."
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]
    answer: 2
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is."
    choices: ["1. Javascript", "2. terminal / bash", "3. for loops", "4. console log"]
    answer: 3
  }
];

for (var i = 0; i < questions.length; i++ ) {
  var question = questions[i].question;
  document.write (question);
  var options = questions[i].choices;
  for (var opt in options) {
     for (var button in userChoices ) {
       userChoices[button].value = options[opt];
       
     }
  }
}


// Timer that counts down from 75
function countdown() {
    var timeLeft = 75;
    containerEl.classList.add("hidden");
    questionEl.classList.remove("hidden");
                // IF YOU TAKE THESE HIDDENS AWAY THEY WON'T SHOW ON PAGE.
                // allDoneEl.classList.add("hidden");
                // allDoneEl.classList.remove("hidden");
                // highScoreEl.classList.add("hidden");
                // highScoreEl.classList.remove("hidden");
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Time: " + timeLeft;
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

