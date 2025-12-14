let score = JSON.parse(localStorage.getItem("Score")) || {
  wins: 0,
  losses: 0,
  tie: 0,
};
updateScore();

function playgame(playerMove) {
  var computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "Scissor") {
    if (computerMove === "Rock") {
      result = "You Lose";
    } else if (computerMove === "Paper") {
      result = "You Win";
    } else if (computerMove === "Scissor") {
      result = "Tie";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Win";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissor") {
      result = "You Lose";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You Lose";
    } else if (computerMove === "Scissor") {
      result = "You Win";
    }
  }

  if (result === "You Win") {
    score.wins++;
  } else if (result === "You Lose") {
    score.losses++;
  } else if (result === "Tie") {
    score.tie++;
  }

  localStorage.setItem("Score", JSON.stringify(score));
  document.querySelector(".js-results").innerHTML = `${result}`;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="${playerMove}-emoji.png" class="icon">  <img src="${computerMove}-emoji.png" class="icon"> Computer`;
  updateScore();
}

function updateScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.tie}`;
}

function pickComputerMove() {
  var randomNumb = Math.random();
  var computerMove = "";

  if (randomNumb >= 0 && randomNumb < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumb >= 1 / 3 && randomNumb < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumb >= 2 / 3 && randomNumb < 1) {
    computerMove = "Scissor";
  }
  return computerMove;
}

let isautoplay = false;
let intervalID;
function autoPlay(){
    if(!isautoplay){
        intervalID = setInterval(function(){
        const playerMove = pickComputerMove();
        playgame(playerMove);
    }, 1000);
    isautoplay=true;
    }
    else{
        clearInterval(intervalID);
        isautoplay=false;
    }
    
}
document.body.addEventListener("keydown",(event)=>{
  if(event.key === 'r'){
    playgame('Rock');
  }
  else if(event.key === 'p'){
    playgame('Paper');
  }
  else if(event.key === 's'){
    playgame('Scissor');
  }
})