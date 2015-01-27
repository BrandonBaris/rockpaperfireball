var playerScore = 0; // scores start at 0 to keep track
var computerScore = 0;
var gamestatus = ""; // string container to hold game status win/lose
var noRock = 0; // ai counter for amount of times player chooses rock
var noPaper = 0; // counts amount of times player chooses paper
var noFireball = 0; // counts amount of times player chooses fireball
var stopstreaking = 5; // amount of times player can choose same type
var playerchoice; // variable to hold the string playerchoice
var cpuchoice;

function play(user){
  var computer = Math.round(Math.random()*2); // generates a random number between 0 and 2
  var player; // converted value when player chooses button

  console.log(computer);

  if(user === 'rock'){ // if the player chooses rock
    playerchoice = "rock";  // if player inputs this it stores the choice as a string into playerchoice
    player = 0; // player value is given 0 to compare against the computer 
    noRock = noRock + 1; // if player chooses rock +1 to their rock counter, and resets paper and fireball counter
    noPaper = 0; // if player chooses rock the paper counter (noPaper) resets to 0
    noFireball = 0; // if player choses rock the fireball counter (noFireball) resets to 0
  } else 
  if (user === 'paper'){ // if player chooses paper
    playerchoice = "paper"; // if player inputs this it stores the choice as a string into playerchoice
    player = 1; // player value is given 1 to compare against the computer
    noRock = 0; // if player chooses paper the rock counter (roRock) resets to 0
    noPaper++; // if player chooses paper +1 to their paper counter, and resets rock and fireball
    noFireball = 0; // if player chooses paper the fireball counter (noFireball) resets to 0
  } else {
    playerchoice = "fireball"; // if player chooses fireball
    player = 2; // player value is given 2 to compare against the computer
    noRock = 0; // if they choose fireball the rock counter (noRock) resets to 0
    noPaper = 0; // if they choose fireball the paper counter (noPaper) resets to 0
    noFireball++; // if player chooses fireball +1 to their fireball counter, and resets rock and paper
  } 

    if(computer === 0){ 
    cpuchoice = "rock";  
  } else 
  if (computer === 1){
    cpuchoice = "paper";
  } else {
    cpuchoice = "fireball";
  } 

  // AI algorithm is less than 5
  if (noRock > stopstreaking || noPaper > stopstreaking || noFireball > stopstreaking){
    gamestatus = "the computer has caught on to your streaking and has countered you";
    computerScore++;
  } else {

    switch (player-computer){ // compares the player value against the random computer value
      case -2: //win (player - computer = -2)
        gamestatus = "won";
        playerScore++;
        break;
      case -1: //lose (player - computer = -1)
        gamestatus = "lost";
        computerScore++;
        break;
      case 1: // Wins (player - computer = 1)
        gamestatus = "won";
        playerScore++;
        break;
      case 2: //Lose (player - computer = 2)
        gamestatus = "lost";
        computerScore++;
        break;
      default: //Tie (player - computer = 0) default is needed in switch?
        gamestatus = "tied";
  }
}
  //looks for the html file for tag id "status" "pscore" to change inbewteen tags for the text
  console.log('player: ',playerScore,' Computer: ',computerScore);
  document.getElementById("status").innerHTML = "You chose " + playerchoice + " and the computer chose " + cpuchoice + "<br> You have " + gamestatus + ".  <br>Click a button to play again!";
  document.getElementById("pscore").innerHTML = "PLAYER SCORE: " + playerScore;
  document.getElementById("cscore").innerHTML = "COMPUTER SCORE: " + computerScore;
  
}