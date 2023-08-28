function getComputerChoice() {
    let choice = ['SCISSORS', 'PAPER', 'ROCK']
    let newChoice = Math.floor(Math.random() * choice.length);
    let randomChoice = choice[newChoice]
    return randomChoice
}
// console.log(getComputerChoice())
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();    
    if ((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS') || (playerSelection == 'SCISSORS') && (computerSelection == 'PAPER') || (playerSelection == 'PAPER') && (computerSelection == 'ROCK')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else if ((playerSelection == 'SCISSORS') && (computerSelection == 'ROCK') || (playerSelection == 'PAPER') && (computerSelection == 'SCISSORS') || (playerSelection == 'ROCK') && (computerSelection == 'PAPER')){
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else{
        return `It's a tie! ${computerSelection} equals ${playerSelection}`
    }   
    
}
//console.log(playRound(playerSelection, computerSelection));
function game() {
let winner1 = 0;
        let winner2 = 0;
    for (i = 1; i <= 5; i++) {
        const playerSelection = prompt(`Round ${i}: Player, choose rock, paper, or scissors:`);
    
        const computerSelection = getComputerChoice();
        const win = 'Win';
        const lose = 'Lose';
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i}`)
        console.log(result);
        if (result.includes(win)) {
            winner1++;
        }else if (result.includes(lose)){
            winner2++;
        }else {
            winner1 ++;
            winner2 ++;
        }
      
    }
    if (winner1 > winner2) {
        console.log('Congratulations! You Win!!!')
    }else if(winner1 < winner2){
        console.log('Try again next time!!!')
    }else {
        console.log("It's a Fucking Tie!!!")
    }
}
game()