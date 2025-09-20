let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#computer-score");
const genCompChoice = () => {
    let options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    console.log("game was draw");
}
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const comChoice = genCompChoice();
    console.log("com choice =", comChoice);
if (userChoice === comChoice) {
    drawGame();
    msg.innerText = "Game-Draw.Play Again!";
    msg.style.backgroundColor = "Grey";
     msg.style.color = "black";
} else {
    let userWin = true;
    if (userChoice === "rock") {
        userWin = comChoice === "scissor";
    } else if (userChoice === "paper") {
        userWin = comChoice === "rock";
    } else if (userChoice === "scissor") {
        userWin = comChoice === "paper";
    }

    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `👍You Win :) ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "Green";
        msg.style.color = "white";
        winGame();
    } else {
    computerScore++;
    comScorePara.innerText = computerScore;
    console.log("You Lose");
    msg.innerText = `😞You Lose :( ${comChoice} beats  your ${userChoice}`;
    msg.style.backgroundColor = "Red";
    msg.style.color = "white";
    }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice =  choice.getAttribute("id");
        playGame(userChoice);
    });
});
let userWin = false;
function winGame() {
    
    userWin = true;

    checkGameResult();
}

function checkGameResult() {
    if (userWin) {
        handleWin();
    }
}

function handleWin() {
    var count = 200;
    var defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
