// Present first page of multiple choice questions.
var body = document.body;
var h1El = document.createElement("h1");
var directionsEl = document.createElement("div");
var startEl = document.createElement("Button");


h1El.textContent = "Coding Quiz Challenge";
directionsEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";


body.appendChild(h1El);
body.appendChild(directionsEl);
body.appendChild(startEl);

h1El.setAttribute("style", "margin:auto; margin-top: 70px; text-align:center;");
directionsEl.setAttribute("style", "margin:auto; margin-top: 30px; font-size: 18px; text-align:center; max-width: 520px;");


// Create ordered list element for questions.

// Clicking on start button on first page.

// Start timer

// Advance to next page if user gets question correct.

// Time is subtracted from timer if user gets question wrong.

// When timer reachs 0 quiz is over and user saves initils and sees score.