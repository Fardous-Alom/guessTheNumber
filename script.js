"use strict";
let theNumber = Math.floor(Math.random() * 20)+1;
let score = 20;
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let highScore = document.querySelector(".highscore");
function newScore() {
  score = Math.max(score - 1, 0);
  document.querySelector(".score").textContent = score;
  if (highScore.textContent < score) {
    highScore.textContent = score;
  }
  if (score === 0) {
    message.textContent = "You lost";
    document.querySelector(".score").textContent = "⛔ Game over";
    
}}

function checkGuess() {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "🔢 Please enter a number";
  } else if (theNumber === guess) {
      message.textContent = "🎉 You win";
      number.textContent = theNumber;
      document.querySelector("body").style.backgroundColor = "#4CBB17";
      number.style.width = "30rem";
      newScore();
    } else if (theNumber > guess && guess > 0) {
      message.textContent = "📉 Too low";
      newScore();
    } else if (theNumber < guess && guess > 0) {
      message.textContent = "📈 Too high";
      newScore();
    }
  };


// Run checkGuess when the button is clicked
document.querySelector(".check").addEventListener("click", checkGuess);

// Run checkGuess when the Enter key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

  document.querySelector(".again").addEventListener("click", function () {
    message.textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    number.textContent = "?";
    document.querySelector(".score").textContent = 20;
    document.querySelector("body").style.backgroundColor = "#222";
  });

 