let startbtn = document.querySelector('.startbtn')
let gestures = ['rock', 'paper', 'scissors']
let buttons = document.querySelectorAll('div img')
let result_div = document.querySelector('.output')
let final_playerScore = 0;
let final_computerScore = 0;
let rounds = 0;
let dom_rounds = document.createElement('p')
let dom_playerChoice = document.createElement('p')
let dom_computerChoice = document.createElement('p')
let dom_result = document.createElement('p')
let dom_finalPlayerScore = document.createElement('p')
let dom_finalComputerScore = document.createElement('p')
let dom_result_message = document.createElement('p')
let appendChildren = [dom_rounds, dom_playerChoice, dom_computerChoice, dom_result, dom_finalPlayerScore, dom_finalComputerScore,dom_result_message]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return gestures[choice]
}
function scoreCount(message, myscore, cpuscore) {
    final_computerScore += cpuscore
    final_playerScore += myscore
    dom_result.innerHTML = `${final_playerScore}-${final_computerScore}<br>${message}</br>`
    if (rounds >= 5)
        showFinalResults()
}
function playRound(playerChoice, computerChoice) {
    let win_str = 'You Win!';
    let lose_str = 'You Lose!';
    let final_str;
    let computerScore
    let playerScore = computerScore = 0;

    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    if (playerChoice === computerChoice) {
        final_str = 'Tie!';
    }
    else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        final_str = win_str + " ROCK beats SCISSORS."
        playerScore++
    }
    else if (computerChoice === 'ROCK' && playerChoice === 'SCISSORS') {
        final_str = lose_str + " ROCK beats SCISSORS."
        computerScore++
    }
    else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        final_str = win_str + " SCISSORS beat PAPER."
        playerScore++
    }
    else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        final_str = lose_str + " SCISSORS beat PAPER."
        computerScore++
    }
    else if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
        final_str = win_str + " PAPER beats ROCK."
        playerScore++
    }
    else {
        final_str = lose_str + " PAPER beats ROCK."
        computerScore++
    }
    dom_rounds.innerHTML = `Round:${++rounds}`
    dom_playerChoice.innerHTML = `You Chose:${playerChoice}`
    dom_computerChoice.innerHTML = `CPU Chose:${computerChoice}`

    scoreCount(final_str, playerScore, computerScore)
}

function showFinalResults() {

    dom_finalPlayerScore.innerHTML = `Your Score:${final_playerScore}`
    dom_finalComputerScore.innerHTML = `CPU's Score:${final_computerScore}`

    if (final_computerScore > final_playerScore) {
        dom_result_message.innerText = `You Are Defeated! Computer Won!`
    }
    else if (final_computerScore < final_playerScore) {
        dom_result_message.innerText = `Victory! You have Won the game!`
    }
    else {
        dom_result_message.innerText = `Game Tied!`
    }
    dom_result_message.innerText += `\n\nRounds Over, Choose again to restart`
    final_computerScore = 0
    final_playerScore = 0
    rounds = 0
}

buttons.forEach((button) =>
    button.addEventListener('click', e => {
        playRound(e.target.className, getComputerChoice())
    }))
appendChildren.forEach((child) =>
    result_div.appendChild(child))