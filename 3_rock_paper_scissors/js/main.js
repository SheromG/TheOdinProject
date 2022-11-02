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

function game()
{
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    const computerSelection = pick(computerChoice);

    const result = logic(pick(playerChoice),computerSelection);

    if(result === "Computer Wins")
    {
        computerScore++; 
        compScore.innerHTML = computerScore;
    }
    else if(result === "Player Wins")
    {
        playerScore++;
        myScore.innerHTML = playerScore;
    }

    console.log("User Select " + pick(playerChoice));
    console.log("Computer Select " + computerSelection);

    console.log(result);

    console.log(`Player score ${playerScore}, Computer score ${computerScore}`);
    console.log("");

    if(playerScore == 5)
    {
        console.log("The Winner is Player. Congratulations!\n");
        playerScore = 0;
    }
    else if(computerScore == 5)
    {
        console.log("The Winner is the Computer. Congratulations!\n");
        computerScore == 0;
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
