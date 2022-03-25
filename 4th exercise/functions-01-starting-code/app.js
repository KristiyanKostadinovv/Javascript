const startGameBtn = document.getElementById('start-game-btn');

const rock = "ROCK";
const scissors = "SCISSORS";
const paper = "PAPER";
const defaultChoice = paper;

const raven = "DRAW";
const pobeda = "PLAYER WINS";
const zaguba = "COMPUTER WINS";

let gameIsRunning = false;


const Playerch = function () {
    const choice = prompt(`Choose ${rock}, ${paper} or ${scissors}`, "").toUpperCase();
    if (choice != rock && choice != paper && choice != scissors) {
        alert("Invalid choice. Default value is chosen.");
        return defaultChoice;
    }
    return choice;
}


const Computerch = function () {
    const random = Math.random();
    if (random < 0.30) {
        return rock;
    } else if (random < 0.60) {
        return scissors;
    } else {
        return paper;
    }
}

const winner = function (PlayerChoice, ComputerChoice) {
    if (PlayerChoice === ComputerChoice) {
        return raven;
    } else if (PlayerChoice === rock && ComputerChoice === scissors || PlayerChoice === scissors && ComputerChoice === paper || PlayerChoice === paper && ComputerChoice === rock) {
        return pobeda;
    } else if (ComputerChoice === rock && PlayerChoice === scissors || ComputerChoice === scissors && PlayerChoice === paper || ComputerChoice === paper && PlayerChoice === rock) {
        return zaguba
    }
}

startGameBtn.addEventListener("click", function () {
    console.log("Game is running");
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    const PlayerSelection = Playerch();
    console.log("Player Selected: ", PlayerSelection);
    const ComputerSelection = Computerch();
    console.log("Computer Selected: ", ComputerSelection);
    const whoWon = winner(PlayerSelection,ComputerSelection);
    console.log(whoWon);
});
