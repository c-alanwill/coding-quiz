// Variables
var body = document.body;
var startEl = document.getElementById('start-button');
var timerEl = document.getElementById('countdown');
var containerEl = document.querySelector('#page-one');
var questionEl = document.querySelector('#question');
var allDoneEl = document.querySelector('#all-done');
var highScoreEl = document.querySelector('#high-score');
var userChoices = document.getElementById('answers');
var feedbackEl = document.getElementById('feedback');
var titleQuestionEl = document.getElementById('title-question');
var submitEl = document.getElementById('submit');
var finalScore = document.getElementById('final-score');
var userScores = []
var initialEl = document.getElementById('initial');
var scores = document.getElementById('scores');
var goBack = document.getElementById('go-back');
var clear = document.getElementById('clear');

var timeLeft = 60;
var timeInterval;
var currentQuestionIndex = 0;

var questions = [
	{
		question: 'Commonly used data types DO NOT Include: ____________.',
		choices: [
      '1. strings', 
      '2. booleans', 
      '3. alerts', 
      '4. numbers'
		],
		answer: 2,
	},
	{
		question:
			'The condition in an if / else statement is enclosed within ____________.',
		choices: [
			'1. quotes',
			'2. curly brackets',
			'3. parenthesis',
			'4. square brackets',
		],
		answer: 2,
	},
	{
		question: 'Arrays in JavaScript can be used to store ____________.',
		choices: [
			'1. numbers and strings',
			'2. other arrays',
			'3. booleans',
			'4. all of the above',
		],
		answer: 3,
	},
	{
		question:
			'String values must be enclosed within ________ when being assigned to variables.',
		choices: [
      '1. commas', 
      '2. curly brackets', 
      '3. quotes', 
      '4. parenthesis'
		],
		answer: 3,
	},
	{
		question:
			'A very useful tool used during development and debugging for printing content to the debugger is:',
		choices: [
			'1. Javascript',
			'2. terminal / bash',
			'3. for loops',
			'4. console log',
		],
		answer: 3,
	},
];

// Timer that counts down from 60
function countdown() {
	timeInterval = setInterval(function () {
		// As long as the `timeLeft` is greater than 1
		if (timeLeft >= 0) {
			// Set the `textContent` of `timerEl` to show the remaining seconds
			timerEl.textContent = 'Time: ' + timeLeft;
			// Decrement `timeLeft` by 1
			timeLeft--;
		} else {
			// Once `timeLeft` gets to 0, set `timerEl` to an empty string
			timerEl.textContent = '';
			// Use `clearInterval()` to stop the timer
			clearInterval(timeInterval);
			endGame();
		}
	}, 1000);
}

function displayQuestion() {
	// erase previous question's options
	userChoices.innerHTML = '';
	// get current question
	var currentQ = questions[currentQuestionIndex];
	// console.log(currentQ);
	// display parts of the question where they belong
	var titleQuestionEl = document.getElementById('title-question');
	titleQuestionEl.textContent = currentQ.question;
	// loop over the choices and create a button for each
	for (var i = 0; i < currentQ.choices.length; i++) {
		var choiceBtn = document.createElement('button');
		choiceBtn.setAttribute('value', i);
		choiceBtn.textContent = currentQ.choices[i];
		userChoices.appendChild(choiceBtn);
	}
}

function checkAnswer(event) {
	var buttonEl = event.target;
	if (!buttonEl.matches('button')) {
		return;
	}

	// check if the answer is incorrect
	if (buttonEl.value != questions[currentQuestionIndex].answer) {
		// penalize time
		timeLeft -= 10;
		if (timeLeft < 0) {
			timeLeft = 0;
		}
		// display 'Wrong Answer'
		feedbackEl.textContent = 'Wrong Answer!';
	} else {
		// display 'Correct Answer'
		feedbackEl.textContent = 'Correct Answer!';
	}
	feedbackEl.setAttribute('class', 'feedback');
	setTimeout(function () {
		feedbackEl.setAttribute('class', 'feedback hidden');
	}, 2000);

	// Increment index to access the next question
	currentQuestionIndex++;

	// Check if we have no more questions
	if (currentQuestionIndex === questions.length) {
		clearInterval(timeInterval);
		endGame();
	} else {
		displayQuestion();
	}
}

function endGame() {
	// alert('All Done!');
  titleQuestionEl.innerHTML = '';
  userChoices.innerHTML = '';
  allDoneEl.classList.add("hidden");
  allDoneEl.classList.remove("hidden");
  finalScore.textContent="Your final score is: " + ++timeLeft;
}

submitEl.addEventListener('click', function () {
  allDoneEl.innerHTML = '';
  highScoreEl.classList.add("hidden");
  highScoreEl.classList.remove("hidden");
  var initialScore = initialEl.value + " - " + timeLeft;
  userScores.push(initialScore);
  localStorage.setItem("initialScore", JSON.stringify (userScores));
  displayScores ();
});

function displayScores () {
  var data=localStorage.getItem("initialScore");
  if (data) {
    userScores = JSON.parse(data);
    scores.textContent = "";
    for (var i = 0; i < userScores.length; i++) {
      scores.innerHTML = scores.innerHTML + `<li>${userScores[i]} </li>`
    }
  }
}
displayScores()

goBack.addEventListener('click', function () {
  location.reload ();
})

clear.addEventListener('click', function () {
  localStorage.clear (); 
  scores.innerHTML = "";
})

// Call Functions
startEl.addEventListener('click', function () {
	containerEl.classList.add('hidden');
	questionEl.classList.remove('hidden');
	countdown();
	displayQuestion();
});

userChoices.addEventListener('click', checkAnswer);


// Do a hover and click state for all buttons.
// either don't display score to last question or display and hold on screen for a couple of seconds before changing page.
// calculate and add final score on all done page. 1 to 4.  Do I add each score to local memory?

// maybe you hold the score after each question, but you hide it until the time you want to show it.  See Activity 12 in Web API.
// so do an event listener with a count for tally in a function.
// var scores = 0 or would this be var li since it's calling the number inside the li?
// if correct: count++,  if incorrect answer: count--
// do you add the function to line 169?

// submit on click will store my score with initials to local memory.

// on Highscores page, display initials next to score and have a list for each time the game is played.
// selecting back returns to beginning.
// Clear Highscores removes scores out of local memory and returns to beginning.

