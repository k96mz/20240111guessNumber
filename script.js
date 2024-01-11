'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const score = document.querySelector('.score');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let highscore = 0;

let secretNumber, scoreNum;

const initialize = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNum = 20;
};
initialize();

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('❌No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (scoreNum > highscore) {
      highscore = scoreNum;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreNum > 1) {
      displayMessage(guess > secretNumber ? '🚀Too high!' : '〽Too low!');
      scoreNum--;
      score.textContent = scoreNum;
    } else {
      displayMessage('💥You lost the game!');
      score.textContent = 0;
    }
  }

  // Whne guess is too high
  // } else if (guess > secretNumber) {
  //   if (scoreNum > 1) {
  //     message.textContent = '🚀Too high!';
  //     scoreNum--;
  //     score.textContent = scoreNum;
  //   } else {
  //     message.textContent = '💥You lost the game!';
  //     score.textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (scoreNum > 1) {
  //     message.textContent = '〽Too low!';
  //     scoreNum--;
  //     score.textContent = scoreNum;
  //   } else {
  //     message.textContent = '💥You lost the game!';
  //     score.textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  initialize();

  displayMessage('Start guessing...');
  number.textContent = '?';
  score.textContent = scoreNum;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
