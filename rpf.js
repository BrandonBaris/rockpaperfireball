var playerScore = 0;
var computerScore = 0;
var gamestatus = "";
var noRock = 0;
var noPaper = 0;
var noFireball = 0;
var stopstreaking = 5; // amount of times player can choose same type
var playerchoice;
function play(user){
  var computer = Math.round(Math.random()*2);
  var player;

  console.log(computer);

  if(user === 'rock'){
    playerchoice = "rock";
    player = 0;
    noRock++;
    noPaper = 0;
    noFireball = 0;
  } else 
  if (user === 'paper'){
    playerchoice = "paper";
    player = 1;
    noRock = 0;
    noPaper++;
    noFireball = 0;
  } else {
    playerchoice = "fireball";
    player = 2;
    noRock = 0;
    noPaper = 0;
    noFireball++;
  } 

  if (noRock > stopstreaking || noPaper > stopstreaking || noFireball > stopstreaking){
    gamestatus = "the computer has caught on to your streaking and has countered you";
    computerScore++;
  } else {

    switch (player-computer){
      case -2: //win
        gamestatus = "won";
        playerScore++;
        break;
      case -1: //lose
        gamestatus = "lost";
        computerScore++;
        break;
      case 1: // Wins
        gamestatus = "won";
        playerScore++;
        break;
      case 2: //Lose
        gamestatus = "lost";
        computerScore++;
        break;
      default: //Tie
        gamestatus = "tied";
  }
}

  console.log('player: ',playerScore,' Computer: ',computerScore);
  document.getElementById("status").innerHTML = "You chose " + playerchoice + " and " + gamestatus + ".  Click a button to play again!";
  document.getElementById("pscore").innerHTML = "PLAYER SCORE: " + playerScore;
  document.getElementById("cscore").innerHTML = "COMPUTER SCORE: " + computerScore;
}