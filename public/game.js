let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorepara =document.querySelector("#user-score");
let compScorepara =document.querySelector("#comp-score");



const genratecompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};
const drawgame = () => {

  msg.innerText ="Game Was Draw.Play Again";
  msg.style.backgroundColor  = "#081b31";

};

const showWinner = (userWin, userchoice, compchoice ) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `you win!${userchoice} beats ${compchoice}`; 
    msg.style.backgroundColor  ="green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `you lose!${compchoice} beats ${userchoice}`; 
    msg.style.backgroundColor  ="red";


  }
};
const playgame = (userchoice) => {
  const compchoice = genratecompchoice();

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = compchoice === "scissors" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choices) => {
  choices.addEventListener("click", () => {
    const userchoice = choices.getAttribute("id");
     playgame(userchoice);
  });
});
