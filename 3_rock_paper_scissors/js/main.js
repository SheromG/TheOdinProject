function pick(choice)
{
    let selection;
    if (choice === 1) {selection = "Rock";}
    else if (choice === 2) {selection = "Paper";}
    else if (choice === 3) {selection = "Scissors";}

    return selection;
}

function logic(playerSelection, computerSelection)
{
    let result;
    if(playerSelection === computerSelection)
    {
        result = "It's a tie!";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock"))
    {
        result = "Computer Wins";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper"))
    {
        result = "Player Wins";
    }
    return result ;
}

let computerScore = 0;
let playerScore = 0;
let myScore = document.getElementById('you');
let compScore = document.getElementById('computer');
let results = document.getElementById('result');

let myPic = document.getElementById('myPic');
let compPic = document.getElementById('compPic');

function game()
{
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    const computerSelection = pick(computerChoice);
    const playerSelection = pick(playerChoice);

    const result = logic(playerSelection,computerSelection);

    if(result === "Computer Wins"){ computerScore++; }
    else if(result === "Player Wins"){ playerScore++; }

    compScore.innerHTML = computerScore;
    myScore.innerHTML = playerScore;
    results.innerHTML = result;

    if (playerSelection === "Rock" ){ myPic.src = "Media/Rock.png"}
    else if (playerSelection === "Paper" ){ myPic.src = "Media/Paper.png"}
    else if (playerSelection === "Scissors" ){ myPic.src = "Media/Scissors.png"}

    if (computerSelection === "Rock" ){ compPic.src = "Media/Rock.png"}
    else if (computerSelection === "Paper" ){ compPic.src = "Media/Paper.png"}
    else if (computerSelection === "Scissors" ){ compPic.src = "Media/Scissors.png"}

    console.log("User Select " + playerSelection);
    console.log("Computer Select " + computerSelection);

    console.log(result);

    console.log(`Player score ${playerScore}, Computer score ${computerScore}`);
    console.log("");

    let winner;
    let finalwinner;

    if(playerScore > 4)
    {
        winner = "Congratulations!"
        finalwinner = "You beat the computer. Well done!";
        console.log("The Winner is Player. Congratulations!\n");
        alert(`${winner} \n\n You scored 5 points! \n The Final score is ${playerScore} - ${computerScore} in your favor \n\n${finalwinner}`);
        playerScore = 0;
        computerScore = 0;
        location.reload();
    }
    else if(computerScore > 4)
    {
        winner = "Aww too bad!"
        finalwinner = "The Computer beat you. Try again next time.";
        console.log("The Winner is the Computer. Congratulations!\n");
        alert(`${winner} \n\n The computer has scored 5 points! \n The Final score is ${playerScore} - ${computerScore} in the computer's favor \n\n${finalwinner}`);
        playerScore = 0;
        computerScore = 0;
        location.reload();
    }
}

let playerChoice;

const pRock = document.querySelector('#rock');
const pPaper = document.querySelector('#paper');
const pScissors = document.querySelector('#scissors');

pRock.addEventListener('click', function(event) 
{   
    playerChoice = 1;
    game();
}, false);

pPaper.addEventListener('click', function(event) 
{   
    playerChoice = 2;   
    game();
}, false);

pScissors.addEventListener('click', function(event) 
{   
    playerChoice = 3;   
    game();
}, false);

function popUp()
{
    let popup = document.getElementById("popUpContainer");
    popup.classList.toggle("show");
}