var playerScore = 0;
var computerScore = 0;
var gamestatus = "";

function play(user){
  var computer = Math.round(Math.random()*2);
  var player;
  console.log(computer);

  if(user === 'rock'){
    player = 0;
  } else 
  if (user === 'paper'){
    player = 1;
  } else
  if (user === 'fireball'){
    player = 2;
  } else {
    console.log("PLEASE CHOOSE 'rock','paper', or 'fireball'.");
  }

  switch (player-computer){
    case -2: //win
      gamestatus = "WIN";
      playerScore++;
      break;
    case -1: //lose
      gamestatus = "LOSE";
      computerScore++;
      break;
    case 1: // Wins
      gamestatus = "WIN";
      playerScore++;
      break;
    case 2: //Lose
      gamestatus = "LOSE";
      computerScore++;
      break;
    default: //Tie
      gamestatus = "TRY AGAIN";
      console.log('TRY AGAIN');
  }
  console.log('player: ',playerScore,' Computer: ',computerScore);
  document.getElementById("status").innerHTML = gamestatus;
  document.getElementById("pscore").innerHTML = "PLAYER SCORE: " + playerScore;
  document.getElementById("cscore").innerHTML = "COMPUTER SCORE: " + computerScore;
}