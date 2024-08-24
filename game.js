//Lets initialise the computer score and the user score
let userScore = 0;
let compScore = 0;

//fetch choice rock/paper/scissor and fetch msg you want to display
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

//fetch userscore para and compscorepara
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// This is compter choice which is random 
const genCompChoice = () =>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
// This is when the game is draw 
const drawGame =() => {
    console.log("game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31"
}

// This is when user or comp win to show winner 
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

//This is playgame function 
const playGame = (userChoice) => { 
    console.log("user choice =", userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice=",compChoice);
    //draw 
    if(userChoice === compChoice) {
        drawGame();
    }
    
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

// This is userchoice whether it is rock,paper,scissor
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});




