let gameResult = ``;

let scoreGame = JSON.parse(localStorage.getItem(`score`)) || {
  wins: 0,
  loss: 0,
  ties: 0
}

displayScore(scoreGame.wins, scoreGame.loss, scoreGame.ties);

function playGame(userChoice) {
  let gameDecision = Math.round(Math.random() * 11);

  if (gameDecision >= 0 && gameDecision <= 3) {
    gameResult = `rock`;
  } else if (gameDecision >= 4 && gameDecision <= 7) {
    gameResult = `paper`;
  } else if (gameDecision >= 8 && gameDecision <= 11) {
    gameResult = `scissors`;
  }

  if (userChoice === `rock` && gameResult === `scissors`) {
    displayText(userChoice, gameResult, `You Win`);
    scoreGame.wins++;
    displayScore(scoreGame.wins, scoreGame.loss, scoreGame.ties);
  } else if (userChoice === `rock` && gameResult === `paper`) {
    displayText(userChoice, gameResult, `You Lose`);
    scoreGame.loss++;
    displayScore(scoreGame.wins, scoreGame.loss, scoreGame.ties);
  } else if (userChoice === `paper` && gameResult === `rock`) {
    displayText(userChoice, gameResult, `You Win`);
    scoreGame.wins++;
    displayScore(scoreGame.wins, scoreGame.loss, scoreGame.ties);
  } else if (userChoice === `paper` && gameResult === `scissors`) {
    displayText(userChoice, gameResult, `You Lose`);
    scoreGame.loss++;
    displayScore(scoreGame.wins, scoreGame.loss, scoreGame.ties);
  } else if (userChoice === `scissors` && gameResult === `paper`) {
    displayText(userChoice, gameResult, `You Win`);
    scoreGame.wins++;
    displayScore(scoreGame.wins, scoreGame.loss, scoreGame.ties);
  } else if (userChoice === `scissors` && gameResult === `rock`) {
    displayText(userChoice, gameResult, `You Lose`);
    scoreGame.loss++;
    displayScore(scoreGame.wins, scoreGame.loss, scoreGame.ties);
  } else if (userChoice === gameResult) {
    displayText(userChoice, gameResult, `Tie Game`);
    scoreGame.ties++;
    displayScore(scoreGame.wins, scoreGame.loss, scoreGame.ties);
  }

  localStorage.setItem(`score`, JSON.stringify(scoreGame));
}

function displayText(userPick, comPick, resultGame) {
  document.querySelector(`.userPickDisplay`).innerHTML = `You <img class="game-img" src="${userPick}-emoji.png">`

  document.querySelector(`.computerPickDisplay`).innerHTML = `<img class="game-img" src="${comPick}-emoji.png"> Computer`

  document.querySelector(`.resultDisplay`).innerHTML = resultGame;
}

function displayScore(win, loss, tie) {
  document.querySelector(`.winsDisplay`).innerHTML = win;
  document.querySelector(`.lossDisplay`).innerHTML = loss;
  document.querySelector(`.tiesDisplay`).innerHTML = tie;
}

function resetScore() {
  scoreGame = {
    wins: 0,
    loss: 0,
    ties: 0
  }

  localStorage.setItem(`score`, JSON.stringify(scoreGame));
  displayScore(0, 0, 0);
}
