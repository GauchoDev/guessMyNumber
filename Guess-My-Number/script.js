'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

// Again BTN
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  console.log(secretNumber);
});

// Check BTN
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber);
  //No number
  if (!guess) {
    displayMessage('🚫 No Number');
  } else if (guess === secretNumber) {
    //Right answer
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number 🎉🎉🎉');

    // Wrong answer
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number is too high ⬆️' : 'Number is too low ⬇️'
      );

      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('You lost the game 💥');
    f;
    score--;
  }
  document.querySelector('.score').textContent = score;
});
