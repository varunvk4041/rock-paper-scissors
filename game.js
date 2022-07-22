let signs = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    console.log(signs[choice])
}
function playRound(playerSelection, computerSelection) {
    let str;
    if (playerSelection === computerSelection) {
        str = 'Tie!';
    }
    else if(playerSelection === /rock/i && computerSelection === /paper/i){
        str ='You Lose! Paper beats Rock!';
    }
    else if(playerSelection === /paper/i && computerSelection === /rock/i){
        str ='You Win! Paper beats Rock!';
    }
    else if(playerSelection === /rock/i && computerSelection === /scissors/i){
        str ='You Win! Rock beats Scissors!';
    }
    else if(playerSelection === /scissors/i && computerSelection === /rock/i){
        str ='You Lose! Rock beats Scissors!';
    }
    else if(playerSelection === /scissors/i && computerSelection === /paper/i){
        str ='You Win! Scissors beats Paper!';
    }
    else {
        str = 'You Lose! Paper beats Rock!'
    }
    return str;
}