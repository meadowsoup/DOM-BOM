document.addEventListener("DOMContentLoaded", () => {

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

     // creating an element for the guesses
     const guesses = document.createElement("p")
     guessList.innerHTML = `Guesses: <span id="guessHistory"> None </span>`;
     
     // adding these elements to the div container inside the HTML!
     app.appendChild(title);
     app.appendChild(instructions);
     app.appendChild(startButton);
     app.appendChild(message);
     app.appendChild(guesses)
     
     // attaching an event listener to the "start button" to trigger the game.
     startButton.addEventListener("click", startGame);
     
     function startGame() {
          // generate a random number between 1 and 100
          let ranNum = Math.floor(Math.random() * 100) + 1;
     
          //tracking the players many attempts
          let attempts = 0;
          let maxAttempts = 7; // limiting guesses to 7

          // storing previous guesses for later display.
          let guessHistory = []
     
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

                    // converting the input to an integer
                    uGuess = parseInt(uGuess, 10);
     
                    // check if it's a valid number between 1 and 100
                    if (isNaN(uGuess) || uGuess < 1 || uGuess > 100) {
                         alert("👹Enter a valid # between 1 and 100👹");
                         playGame(); // ask again if invalid.
                         return;
                    }
     
                    // incrementing the attempts
                    attempts++

                    // previous guesses get stored in guess history array!
                    guessHistory.push(uGuess);

                    // update webpage with the guessing information
                    updateDOM(uGuess)
     
                    // check if the guess is correct
                    if (uGuess === ranNum) {
                         alert("Congrats🎊! You guessed correctly👍🏽")
                    } else if (uGuess > ranNum) {
                         alert("⬆too large, try again!")
                         playGame();
                    } else {
                         alert("⬇too small, try again!")
                         playGame();
                    }
               }, 100); // delaying for better game experience!
          }
     
          // updating the DOM with game progress using function
          function updateDOM(guess) {
               // final guess of player
               document.getElementById("message").textContent = `Final Guess: ${guess}`;

               // update guess history display with all the guesses!
               document.getElementById("guessHistory").textContent = guessHistory.join(", ");
          }

          // start the guessing process
          playGame();
     }
});

