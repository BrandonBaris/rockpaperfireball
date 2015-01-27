var playerScore = 0;
var computerScore = 0; //starts at 0

function play (user){
  var computer = Math.round(Math.random() * 2); // chooses 0 1 or 2?

  var player;
  var gamestatus = ""; 
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
  } else {
      console.log("SORRY CANT UNDERSTAND");
  }

  // Matrix of 0 : TIE , 
  // CPUvsME:Player v----MINUS the Computer's choice = 0, 1, -1, 2, or -2 for the CASES
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