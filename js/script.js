
const playSound = (decision) => {
	
	if(decision === "YOU WIN!"){
	
      var audio = new Audio('win.mp3');
	
	}
	
	else if(decision === "YOU LOSE!"){
	
	 audio = new Audio('nexttime.wav');
	 
	}
	
	else {
	
	 audio = new Audio('tie.wav');
	 
	}
	
  // Play the sound.
  audio.play();
}

const handOptions = {

  rock: "assets/Rock.png",
  paper: "assets/Paper.png",
  scissors: "assets/Scissors.png"
}


let SCORE = 0;

const pickUserHand = (hand) => {
  
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};



const pickComputerHand = (hand) => {
  
    let cpHand = Object.keys(handOptions)[Math.floor(Math.random()*Object.keys(handOptions).length)]
    
    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand]
    
    checkWin(hand, cpHand);
};

const checkWin = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setResult("YOU LOSE!");
	  setScore(SCORE - 1);
    
  }
  if (userHand == "paper" && cpHand == "rock") {
    setResult("YOU WIN!");
    setScore(SCORE + 1);
  
    
  }
  if (userHand == "paper" && cpHand == "paper") {
    setResult("It's a tie!");
	
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setResult("YOU WIN!");
    setScore(SCORE + 1);
   
    
  }
  if (userHand == "rock" && cpHand == "paper") {
    setResult("YOU LOSE!");
    setScore(SCORE - 1);
    
  }
  if (userHand == "rock" && cpHand == "rock") {
    setResult("It's a tie!");
	
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setResult("It's a tie!");
	
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setResult("YOU LOSE!");
	  setScore(SCORE - 1);
    
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setResult("YOU WIN!");
    setScore(SCORE + 1);
   
    
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
 
}

const setResult = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
 
    playSound(decision);
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
  
}



