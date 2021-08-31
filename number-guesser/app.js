/*
Game Function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if they lose
- let player choose to play again
*/

// Game values
let min = 1, 
max = 10,
winningNum = 2,
guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
