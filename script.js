

// ***** GAME STARTS HERE ******** //
const buttons = document.querySelectorAll('#btn');
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";


function computerTurn() {

    const array = ["rock", "paper", "scissor"];
    const randomSelection = array[Math.floor(Math.random() * array.length)];
    if (randomSelection === "rock")
    {
      document.getElementById('computer-hand').innerHTML = `<img class = 'hand-big' 
                src='../rock_paper_scissor/images/rock-hand-big.png' alt='hand gesture of rock'>`;
    } else if (randomSelection === "paper")
    {
      document.getElementById('computer-hand').innerHTML = `<img class = 'hand-big' 
            src = '../rock_paper_scissor/images/paper-hand-big.png' alt='hand gesture of paper'>`;
    } else
    {
      document.getElementById('computer-hand').innerHTML = `<img class = 'hand-big' 
        src = '../rock_paper_scissor/images/scissor-hand-big.png' alt = 'hand gesture of scissor'>`;
    }
    return randomSelection;
}

// *** COUNTING THE PLAYER ROUND *** 

function playRound(playerSelection, computerSelection) {
  // your code here!
    if (playerSelection === "rock" && computerSelection === "scissor" || 
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissor" && computerSelection === "paper")
     {
      document.getElementById('who-win').textContent = "YOU WIN!";
      playerScore++;
      document.getElementById('score1').textContent = playerScore;
    }
    else if (playerSelection === "scissor" && computerSelection === "rock" || 
                playerSelection === "rock" && computerSelection === "paper" || 
                playerSelection === "paper" && computerSelection === "scissor")
      {
       document.getElementById('who-win').textContent = "COMPUTER WIN!";
        computerScore++;
        document.getElementById('score2').textContent = computerScore;
      }
    else {
      document.getElementById('who-win').textContent = "TIE DYE!";
    }
  };


  function declareWinner() {
     if (playerScore >= 5)
      {
      const modal = document.getElementById('modal-container');
      modal.style.display = "flex";
      document.getElementById('winner').textContent = 'You win!';

    const reStart = document.getElementById('restart');
    reStart.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('score1').textContent = 0;
    document.getElementById('score2').textContent = 0;
    document.getElementById('who-win').textContent = "START THE GAME!";
    modal.style.display = "none";
    });
    } else if (computerScore >= 5) {

      const modal = document.getElementById('modal-container');
      modal.style.display = "flex";
      const reStart = document.getElementById('restart');
      document.getElementById('winner').textContent = "Computer Win!";

      reStart.addEventListener('click', () => {
      playerScore = 0;
      computerScore = 0;
      document.getElementById('score1').textContent = 0;
      document.getElementById('score2').textContent = 0;
      document.getElementById('who-win').textContent = "START THE GAME!";
      modal.style.display = "none";

    });
    }
  };

// Iterate buttons to track the value of the button
function playerTurn() {
buttons.forEach((button) => {

   button.addEventListener('click', () => {
    playerSelection = button.value;
    if (playerSelection === "rock") {
            document.getElementById('playerone-hand').innerHTML = `<img class = 'hand-big' 
            src='../rock_paper_scissor/images/rock-hand-big.png' alt='hand gesture of rock'>`;
     } else if (playerSelection === "paper")
      {
        document.getElementById('playerone-hand').innerHTML = `<img class  = 'hand-big' 
          src = '../rock_paper_scissor/images/paper-hand-big.png' alt='hand gesture of paper'>`;
      } else {
        document.getElementById('playerone-hand').innerHTML = `<img class = 'hand-big' 
          src = '../rock_paper_scissor/images/scissor-hand-big.png' alt = 'hand gesture of scissor'>`;
      }
      computerSelection = computerTurn();
      playRound(playerSelection, computerSelection);
      declareWinner();
  });
});
}

playerTurn();
