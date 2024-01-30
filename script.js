let userScore = 0;
let compScore = 0;
let gameChoice = document.querySelectorAll(".choice");
let msgContainer = document.querySelector(".msg-for-game");
let msg = document.querySelector(".msg");
let userText = document.querySelector(".user-choice")
let compText = document.querySelector(".comp-choice")
let userWin = true;


const generateCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () =>{
    console.log("draw!");
    msg.innerHTML = "Draw";
    msg.style.backgroundColor = "rgb(29, 29, 44)"
}

const showWinner = () => {
    if(userWin){
        userScore++;
        userText.innerHTML = userScore;
        console.log("you win");
        msg.innerHTML = "You Win";
        msg.style.backgroundColor = "green";
        userWin = false;
    }else{
        compScore++;
        compText.innerHTML = compScore;
        console.log("you loose")
        msg.innerHTML = "You Loose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = generateCompChoice();
    // console.log(userChoice)
    // console.log(compChoice)
    if(userChoice === compChoice){
        drawGame();
    }else{
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }


}
gameChoice.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

})