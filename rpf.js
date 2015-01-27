var playerScore = 0;
var computerScore = 0; //starts at 0

function play (user){
  var computer = Math.round(Math.random() * 2); // chooses 0 1 or 2?
  var player; 
  console.log(computer); // calls the function computer as a variable??

  if (user === "rock") {
      player = 0;
      console.log("0");
      // if user types in "rock" displays 0   
  } else if (user === "paper") {
     player = 1;
     console.log("1");
     // if user types in "paper" displays 1   
  } else if (user === "fireball") {
      player = 2;
      console.log("2");    
  } else
      console.log("SORRY CANT UNDERSTAND");
  }

  // Matrix of 0 : TIE , 
  // CPUvsME:Player v----MINUS the Computer's choice = 0, 1, -1, 2, or -2 for the CASES
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
  // This is the final printed to see the scores for each variable within the play function
  console.log("Player: ",playerScore," Computer: ", computerScore);
}