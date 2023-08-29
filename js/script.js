function getComputerChoice() {
    let choice = ['SCISSORS', 'PAPER', 'ROCK'];
    let newChoice = Math.floor(Math.random() * choice.length);
    let randomChoice = choice[newChoice];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if ((playerSelection == 'ROCK') && (computerSelection == 'SCISSORS') || (playerSelection == 'SCISSORS') && (computerSelection == 'PAPER') || (playerSelection == 'PAPER') && (computerSelection == 'ROCK')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if ((playerSelection == 'SCISSORS') && (computerSelection == 'ROCK') || (playerSelection == 'PAPER') && (computerSelection == 'SCISSORS') || (playerSelection == 'ROCK') && (computerSelection == 'PAPER')) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return `It's a tie!!!!`
    }

}

const options = document.querySelectorAll('.btn');
const main = document.querySelector('.main');
const div = document.createElement('div');
const leftSection = document.querySelector('#left-section');
const rightSection = document.querySelector('#right-section');
const pLeft = document.createElement('p');
const pRight = document.createElement('p');
div.classList.add('result');
let playerScore = 0;
let computerScore = 0;
pLeft.textContent = playerScore;
pRight.textContent = computerScore;
leftSection.appendChild(pLeft);
rightSection.appendChild(pRight);
options.forEach(selection => {
    selection.addEventListener('click', game);

})

function game() {

    const playerSelection = this.textContent

    const computerSelection = getComputerChoice();


    let result = playRound(playerSelection, computerSelection);
    div.textContent = result
    main.insertBefore(div, rightSection)

    if (result.includes('Win')) {
        playerScore++;
    } else if (result.includes('Lose')) {
        computerScore++;
    } else {
        playerScore = playerScore;
        computerScore = computerScore
    }
    pLeft.textContent = playerScore;
    pRight.textContent = computerScore;
    if (playerScore === 5) {
        confirm(`Congratulation! you WON 
        Result: ${playerScore} : ${computerScore}
        Did you want to continue?`);
        main.removeChild(div)
        playerScore = 0
        computerScore = 0
        pLeft.textContent = playerScore
        pRight.textContent = computerScore
    } else if (computerScore === 5) {
        confirm(`OOPS! Try again
        Result: ${playerScore} : ${computerScore}
        Try Again?`);
        main.removeChild(div)
        playerScore = 0;
        computerScore = 0;
        pLeft.textContent = playerScore
        pRight.textContent = computerScore
    }
}