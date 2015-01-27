var playerScore = 0;
var computerScore = 0;

function rpf(user){
  var computer = Math.round(Math.random()*2);
  var player;
  console.log(computer);

  if(user === "rock"){
    player = 0;
  } else 
  if (user === "paper"){
    player = 1;
  } else
  if (user === "fireball"){
    player = 2;
  } else {
    console.log("PLEASE CHOOSE 'rock','paper', or 'scissors'.");
  }

  switch (player-computer){
    case -2: //win
      playerScore++;
      break;
    case -1: //lose
      computerScore++;
      break;
    case 1: // Wins
      playerScore++;
      break;
    case 2: //Lose
      computerScore++;
      break;
    default: //Tie
      console.log('TRY AGAIN');
  }
  console.log('player: ',playerScore,' Computer: ',computerScore);
}