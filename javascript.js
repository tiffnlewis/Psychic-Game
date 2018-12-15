
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesMade = [];
var userGuess = document.onkeyup;
var compGuess = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function (event) {
  
  guessesMade.push(userGuess);

  if (compGuess == userGuess) {
    wins++;
    guessesLeft = 10;
    guessesMade = [];
  }
  
  if (compGuess != userGuess) {
    guessesLeft--;
    
  }

  if (guessesLeft == 0) {
    losses++;
    guessesLeft = 10;
    guessesMade = [];
  }

  var html =
    '<p><h1>The Psychic Game</h1></p>' +
    '<p>Guess what letter I am thinking of</p>' +
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>' +
    '<p>Guesses Left: ' + guessesLeft + '</p>' +
    '<p>Your Guesses: ' + guessesMade + '</p>';
document.getElementById("game").innerHTML = html;
}
