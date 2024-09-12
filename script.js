"use strict";
let theNumber = Math.floor(Math.random() * 20)+1;
let score = 20;

function newScore() {
  score = Math.max(score - 1, 0);
  document.querySelector(".score").textContent = score;
  if (score === 0) {
    document.querySelector(".message").textContent = "You lost";
    document.querySelector(".score").textContent = "Game over";
    
}}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Please enter a number";
  } else if (theNumber === guess) {
      document.querySelector(".message").textContent = "You win";
      document.querySelector(".number").textContent = theNumber;
      document.querySelector("body").style.backgroundColor = "#4CBB17";
      document.querySelector(".number").style.width = "30rem";
      newScore();
    } else if (theNumber > guess && guess > 0) {
      document.querySelector(".message").textContent = "Too low";
      newScore();
    } else if (theNumber < guess && guess > 0) {
      document.querySelector(".message").textContent = "Too high";
      newScore();
    }
  });

  document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = 20;
     document.querySelector("body").style.backgroundColor = "#222";
  });