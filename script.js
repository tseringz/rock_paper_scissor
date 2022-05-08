
//The game will over at round 5
//Set variable that store the score of the game
//When the Player input a string of rock paper scissor
//Initialise a variable and set its value to the input
//Computer will generate random selection from rock paper scissor
//Initialise the variable and store the selected value
//If Player input rock and computer generate scissor, message shows player win! and vis versa
//Add score to the variable 
//If Player input paper and computer generate rock, message shows player win! and vis versa
//Add score to the variable 
//If Player input scissor and computer generate paper, message shows player win! vis versa
//Addscore to the variable
//If player input and computer input are same, message shows Tie!!
//If any of player win the game show Winning message on the computer screen
//player can click on the play button and start the game again.



// ***** GAME STARTS HERE ******** //
function computerPlay() {

    const array = ["rock", "paper", "scissor"];
    const randomSelection = array[Math.floor(Math.random() * array.length)];
    if(randomSelection === "rock")
    {
    document.getElementById('computer-hand').innerHTML = `<img class = 'hand-big' 
                src='../rock_paper_scissor/images/rock-hand-big.png' alt='hand gesture of rock'>`;
    }
    else if(randomSelection === "paper")
    {
    document.getElementById('computer-hand').innerHTML = `<img class = 'hand-big' 
            src = '../rock_paper_scissor/images/paper-hand-big.png' alt='hand gesture of paper'>`;
    }
    else
    {
    document.getElementById('computer-hand').innerHTML = `<img class = 'hand-big' 
      src = '../rock_paper_scissor/images/scissor-hand-big.png' alt = 'hand gesture of scissor'>`;
    }
    return randomSelection;
}
// DOM Manupulation
// let player one select the images that symbolised rock paper scissor
// when player one click the image, store that data to the variable called PlayerSelection
// *** COUNTING THE PLAYER ROUND *** 
const buttons = document.querySelectorAll('#btn');
let playeroneScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  // your code here!
    if(playerSelection === "rock" && computerSelection === "scissor" || 
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissor" && computerSelection === "paper")
     {
      document.getElementById('who-win').textContent = "YOU WIN!";
      playeroneScore++;
      document.getElementById('score1').textContent = playeroneScore;
    }
    else if(playerSelection === "scissor" && computerSelection === "rock" || 
                playerSelection === "rock" && computerSelection === "paper" || 
                playerSelection === "paper" && computerSelection === "scissor")
      {
       document.getElementById('who-win').textContent = "COMPUTER WIN!";
        computerScore++;
        document.getElementById('score2').textContent = computerScore;
      }
    else{
      document.getElementById('who-win').textContent = "TIE DYE!";
    }
  };


// counting the game, if either of the player won the game, game starts agian
  function gameCount() {
     if (playeroneScore >= 5)
      {
    
    const modal = document.getElementById('modal-container');
    modal.style.display = "flex";
    const reStart = document.getElementById('restart');
    const winner = document.getElementById('winner');
    winner.textContent = "You won!";
    reStart.addEventListener('click', () => {
    playeroneScore = 0;
    computerScore = 0;
    document.getElementById('score1').textContent = 0;
    document.getElementById('score2').textContent = 0;
    document.getElementById('who-win').textContent = "START THE GAME!";
    modal.style.display = "none";
    });
    }
  else if (computerScore >= 5) {

    const modal = document.getElementById('modal-container');
    modal.style.display = "flex";
    const reStart = document.getElementById('restart');
    const winner = document.getElementById('winner');
    winner.textContent = "Computer Won!";
    reStart.addEventListener('click', () => {
    playeroneScore = 0;
    computerScore = 0;
    document.getElementById('score1').textContent = 0;
    document.getElementById('score2').textContent = 0;
    document.getElementById('who-win').textContent = "START THE GAME!";
    modal.style.display = "none";

    });
  }
  };

// we use the .forEach method to iterate through each button
let playerSelection = "";
let computerSelection = "";
buttons.forEach((button) => {
// and for each one we add a 'click' listener
   button.addEventListener('click', () => {
    playerSelection = button.value;
    if(playerSelection === "rock") {
            document.getElementById('playerone-hand').innerHTML = `<img class = 'hand-big' 
            src='../rock_paper_scissor/images/rock-hand-big.png' alt='hand gesture of rock'>`;
     }
      else if(playerSelection === "paper")
      {
     document.getElementById('playerone-hand').innerHTML = `<img class  = 'hand-big' 
          src = '../rock_paper_scissor/images/paper-hand-big.png' alt='hand gesture of paper'>`;
      }
      else{
      document.getElementById('playerone-hand').innerHTML = `<img class = 'hand-big' 
      src = '../rock_paper_scissor/images/scissor-hand-big.png' alt = 'hand gesture of scissor'>`;
      }
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    gameCount();
  });
});
 
