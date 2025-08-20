// Rock Paper Scissors game

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "ROCK";
      break;
    case 2:
      computerChoice = "PAPER";
      break;
    case 3:
      computerChoice = "SCISSORS";
      break;
  }

  return computerChoice;
}

// function getplayerChoice() {
//     let playerChoice = prompt("Rock, paper, or scissors?")
//     return playerChoice
// }

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();

  console.log("Computer chose: " + computerChoice);
  console.log("Player chose: " + playerChoice);
  console.log(" ");

  updateImages(computerChoice, playerChoice)

  if (playerChoice === computerChoice) {
    updateStatus("tie");
  } else if ((playerChoice === "ROCK") & (computerChoice === "PAPER")) {
    updateStatus("computerWins");
    computerScore++;
  } else if ((playerChoice === "PAPER") & (computerChoice === "SCISSORS")) {
    updateStatus("computerWins");
    computerScore++;
  } else if ((playerChoice === "SCISSORS") & (computerChoice === "ROCK")) {
    updateStatus("computerWins");
    computerScore++;
  } else if ((playerChoice === "ROCK") & (computerChoice === "SCISSORS")) {
    updateStatus("playerWins");
    playerScore++;
  } else if ((playerChoice === "PAPER") & (computerChoice === "ROCK")) {
    updateStatus("playerWins");
    playerScore++;
  } else if ((playerChoice === "SCISSORS") & (computerChoice === "PAPER")) {
    updateStatus("playerWins");
    playerScore++;
  } else {
    console.log("Racoon got into the copier");
  }

const scoreBoardComputer = document.querySelector("#computerScore")
const scoreBoardPlayer = document.querySelector("#playerScore")
scoreBoardComputer.textContent = computerScore
scoreBoardPlayer.textContent = playerScore

// console.log("Computer: " + computerScore + " Player: " + playerScore)

}

function updateStatus(status) {
  const statusbox = document.querySelector("#status");

  switch (status) {
    case "computerWins":
      statusbox.classList.replace("bg-black", "bg-red-700");
      statusbox.textContent = "Computer Wins!";
      setTimeout(() => resetGame(), 3000);
      break;
    case "playerWins":
      statusbox.classList.replace("bg-black", "bg-emerald-700");
      statusbox.textContent = "Player Wins!";
      setTimeout(() => resetGame(), 3000);
      break;
    case "tie":
      statusbox.classList.replace("bg-black", "bg-blue-700");
      statusbox.textContent = "It's a tie!";
      setTimeout(() => resetGame(), 3000);
      break;
  }
}

function updateImages(computer, player) {
    const computerImage = document.querySelector("#computerImage")
    const playerImage = document.querySelector("#playerImage")

    switch (computer) {
        case "ROCK":
            computerImage.textContent = "🪨"
        break;
        case "PAPER":
            computerImage.textContent = "📄"
        break;
        case "SCISSORS":
            computerImage.textContent = "✂️"
        break;
    }

    switch (player) {
        case "ROCK":
            playerImage.textContent = "🪨"
        break;
        case "PAPER":
            playerImage.textContent = "📄"
        break;
        case "SCISSORS":
            playerImage.textContent = "✂️"
        break;
    }


}

function resetGame() {
  const statusbox = document.querySelector("#status");
  statusbox.className = "sm:w-[620px] w-full mx-4 sm:text-3xl text-xl font-bold bg-black flex justify-center p-2";
  statusbox.textContent = "Choose your weapon!";

      const computerImage = document.querySelector("#computerImage")
    const playerImage = document.querySelector("#playerImage")

    computerImage.textContent = ""
    playerImage.textContent = ""

}

const btnRock = document.querySelector("#btnRock");
btnRock.onclick = () => playRound("ROCK");

const btnPaper = document.querySelector("#btnPaper");
btnPaper.onclick = () => playRound("PAPER");

const btnScissors = document.querySelector("#btnScissors");
btnScissors.onclick = () => playRound("SCISSORS");
