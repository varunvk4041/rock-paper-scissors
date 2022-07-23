let signs = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return signs[choice];
}
function playRound(playerSelection, computerSelection) {
    let win_str = 'You Win!';
    let lose_str = 'You Lose!';
    let final_str;
    let playerScore = computerScore = 0;

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        final_str = 'Tie!';
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        final_str = win_str + " ROCK beats SCISSORS."
        playerScore++
    }
    else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        final_str = lose_str + " ROCK beats SCISSORS."
        computerScore++
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        final_str = win_str + " SCISSORS beat PAPER."
        playerScore++
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        final_str = lose_str + " SCISSORS beat PAPER."
        computerScore++
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        final_str = win_str + " PAPER beats ROCK."
        playerScore++
    }
    else // player = rock, computer = paper 
    {
        final_str = lose_str + " PAPER beats ROCK."
        computerScore++
    }
    console.log(playerSelection, computerSelection)
    return [final_str, playerScore, computerScore]
}
function game() {
    let final_playerScore = 0;
    let final_computerScore = 0;
    let rounds = 0;
    for (let i = 0; i < 5; i++) {
        console.log('Round ',++rounds)
        let playerChoice = prompt("What do you pick? Rock, Paper or Scissors?")
        let computerChoice = getComputerChoice();
        let results = playRound(playerChoice, computerChoice);
        final_playerScore += results[1];
        final_computerScore += results[2];
        console.log(results[0])
        console.log('Your Score = '+final_playerScore)
        console.log('Computer\'s Score = '+final_computerScore+'\n\n')
    }
    if (final_computerScore > final_playerScore) {
        console.log('You Are Defeated! Computer Won!')
    }
    else{
        console.log('Victory! You have Won the game!')
    }
    console.log('Rounds Over, Restart to play Again!')
}
game()