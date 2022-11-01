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

let computerScore = 0;
let playerScore = 0;
1
for(let i = 0; i < 5; i++)
{
    let playerChoice = prompt("1 - Rock\n2 - Paper \n3 - Scissors");
    playerChoice = parseInt(playerChoice);
    
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    const computerSelection = pick(computerChoice);
    const playerSelection = pick(playerChoice);

    const result = logic(playerSelection,computerSelection);
    
    if(result === "Computer Wins"){computerScore++}
    else if(result === "Player Wins"){playerScore++}

    console.log("User Select " + playerSelection);
    console.log("Computer Select " + computerSelection);
    console.log(result);
    console.log(`Player score ${playerScore}, Computer score ${computerScore}`);
    console.log("");
}
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