// event: user types a letter, trying to guess what the computer chose
// command: user will type a letter
//      command: computer will keep track of guesses
//      command: computer will keep track of wins and losses
//      command: computer will keep track of guesses left
//      command: restart game on wins/losses without refreshing page
// Outcome: user will win or lose and game will restart

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var wins = 0;
var losses = 0;
var allowedGuesses = 7;
var userGuesses = [];
var compChoice = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log(compChoice);


$(document).on("keydown", function(event) {
    if(alphabet.includes(event.key)) {
        if(event.key === compChoice) {
            wins ++ 1;
            userGuesses = [];
            alert("You won!");
            // correct: wins+1, congrats
        } else {userGuesses.push(event.key);
            // record guess
            if(allowedGuesses - userGuesses.length === 0) {
                alert("You lost!");
                losses ++ 1;
            } else {allowedGuesses

            }
            // check remaining guesses
            // outcome: increment losses
        }

        //search:
        //jquery update HTML
        //jquery change html text

        // add an update to html to reflect numbers
    }
});