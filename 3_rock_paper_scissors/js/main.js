function pick(choice)
{
    let selection;
    if (choice === 1) {selection = 'Rock';}
    else if (choice === 2) {selection = 'Paper';}
    else if (choice === 3) {selection = 'Scissors';}

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
function computer()
{
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    const computerSelection = pick(computerChoice);

    return computerSelection;
}
function game()
{
    const playerSelection = pick(playerChoice);
    const result = logic(playerSelection,computer());

    console.log("User Select " + playerSelection);
    console.log("Computer Select " + computer());

    if(result === "Computer Wins"){computerScore++}
    else if(result === "Player Wins"){playerScore++}

    console.log(result);
    console.log(`Player score ${playerScore}, Computer score ${computerScore}`);
    console.log("");
}
let computerScore = 0;
let playerScore = 0;

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

/*
if(playerScore > computerScore)
{
    console.log("The Winner is Player. Congratulations!");
}
else if(playerScore < computerScore)
{
    console.log("The Winner is the Computer. Congratulations!");
}
else
{
    console.log("And the winner is the both of you! Congratulations!");
}
*/