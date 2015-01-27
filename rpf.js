var playerScore = 0;
var computerScore = 0; //starts at 0

function play (user){
  var computer = Math.round(Math.random() * 2); 
  var player;
  var result;
  console.log(computer);

  if (user === "rock") {
    player = 0;
    console.log("0");
    
  } else 
  if (user === "paper") {
    player = 1;
    console.log("1");
    
  } else 
  if (user === "fireball") {
    player = 2;
    console.log("2");    
  } else
  {
    console.log("SORRY CANT UNDERSTAND");
  }

  switch (player - computer) {
   case -2:
      console.log("Wins");
      playerScore++;
      break;
   case -1:
      console.log("Lose");
      computerScore++;
      break;
    case 1:
      console.log("Wins");
      playerScore++;
      break;
    case 2:
      console.log("Lose");
      computerScore++;
      break;
    default:
      console.log("Try Again");  
  }

  console.log("Player: ",playerScore," Computer: ", computerScore);
}