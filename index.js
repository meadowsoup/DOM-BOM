// selecting the div called "app" from the HTML to insert it's elements
const app = document.getElementById("app");

// creating the games title
const title = document.createElement("h1")
title.textContent = "Take a Guess!";

// creating the users instructions!
const instructions = document.createElement("p")
instructions.textContent = "Number between 1 and 100, any guesses?";

// creating the games "start" button
const startButton = document.createElement("button")
startButton.textContent = "Start!";

// creating an empty paragraph[p] to display game messages!
const message = document.createElement("p")
message.setAttribute("id", "message"); // assign an ID for selections

// adding these elements to the div container inside the HTML!
app.appendChild(title);
app.appendChild(instructions);
app.appendChild(startButton);
app.appendChild(message);

// attaching an event listener to the "start button" to trigger the game.
startButton.addEventListener("click", startGame);

function startGame() {
     // generate a random number between 1 and 100
     let ranNum = Math.floor(Math.random() * 100) + 1;

     //tracking the players many attempts
     let attempts = 0;
     let maxAttempts = 7; // limiting guesses to 7

     // function for the user input and handling the game logic
     function playGame() {
          // ending the game if the number of attempts exceed the max
          if (attempts >= maxAttempts) {
               alert(`😭Game Over😭 ... The number was ${ranNum}.`);
               return;
          }

          // trying to prevent browser blocking which is optional using setTimeout!
          setTimeout(() => {
               // prompt for the players guess
               let uGuess = window.prompt("Enter a number between 1 and 100:");

               // we're gonna exit the game if the player clicks cancel
               if (uGuess === null) {
                    alert("🤡")
                    return
               };

               // check if it's a valid number between 1 and 100
               if (isNaN(uGuess) || uGuess < 1 || uGuess > 100) {
                    alert("👹Enter a valid # between 1 and 100👹");
                    playGame(); // ask again if invalid.
                    return;
               }

               // incrementing the attempts
               attempts++

               // check if the guess is correct
               if (uGuess === ranNum) {
                    alert("Congrats🎊! You guessed correctly👍🏽")
               } else if (uGuess > ranNum) {
                    alert("⬆️too large, try again!")
                    playGame();
               } else {
                    alert("⬇️too small, try again!")
                    playGame();
               }
          }, 100); // delaying for better game experience!
     }
}
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