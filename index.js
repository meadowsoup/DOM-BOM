const app = document.getElementById("app");

const title = document.createElement("h1")
title.textContent = "Take a Guess!";

const instructions = document.createElement("p")
instructions.textContent = "Number between 1 and 100, any guesses?";

const startButton = document.createElement("button")
startButton.textContent = "Start!";

const message = document.createElement("p")


// const ranNum = Math.floor(Math.random() * 100) + 1;
// let attempts = 7;






























































































// const gameContainer = document.getElementById("game-container");

// const messageEl = document.createElement("p");
// const attemptsEl = document.createElement("p");

// gameContainer.appendChild(messageEl);
// gameContainer.appendChild(attemptsEl);

// let ranNum = Math.floor(Math.random() * 100) + 1;
// let attLeft = 10;

// function updateGameUI(message, color) {
//      messageEl.textContent = message
//      messageEl.style.color = color
//      attemptsEl.textContent = `Attempts Left: ${attLeft}`
// };

// function playGame() {
//      if (attLeft <= 0) {
//           setTimeout(() => alert(`😭Game Over😭 ... The number was ${ranNum}.`), 100)
//           updateGameUI(`Damn bro, it was ${ranNum} 😓`, "red")
//           return
//      };

//      setTimeout(() => {
//           let uGuess = prompt("Enter a number between 1 and 100:")
//           if (uGuess === null) {
//                alert("🤡")
//                return
//           };

//           uGuess = Number(uGuess);

//           if(isNaN(uGuess) || uGuess < 1 || uGuess > 100) {
//                alert("👹Enter a valid # between 1 and 100👹")
//                playGame()
//                return
//           };

//           if (uGuess === ranNum) {
//                updateGameUI("Congrats🎊! You guessed correctly👍🏽", "green")
//                setTimeout(() => alert("Winner winner, chicken dinner. The number was " + ranNum), 100)
//           } else {
//                attLeft--
//                updateGameUI(uGuess > ranNum ? "⬆️too large, try again!" : "⬇️too small, try again!", "orange")
//                playGame()
//           };
//      }, 100);
// };

// setTimeout(playGame, 500);