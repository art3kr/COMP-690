function userChoice() {
    alert('Rock, Paper, Scissors Game!');
    choice = prompt('Enter a value: rock, paper, or scissors').toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt('Input not recognized, please try again.  Options: rock, paper, scissor').toLocaleLowerCase();
    }
    return choice; 
}

function computerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    let choice;
    if (randomNumber === 0) {
        choice = 'rock';
    } else if (randomNumber === 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

function determineWinner(uChoice, compChoice) {
    if (compChoice === uChoice) {
        alert('Its a tie!')
    } else {
        if (compChoice === "rock") {
            if (uChoice === "scissors") {
                alert('Computer wins!');
            } else if (uChoice === 'paper') {
                alert('You win!')
            }
        } else if (compChoice === "paper") {
            if (uChoice === "rock") {
                alert('Computer wins!');
            } else if (uChoice === 'scissors') {
                alert('You win!')
            }
        } else {
            if (uChoice === "paper") {
                alert('Computer wins!');
            } else if (uChoice === 'rock') {
                alert('You win!')
            }
        }
    } 
}

function main() {
    uChoice = userChoice();
    compChoice = computerChoice();
    alert(`You chose ${uChoice} and the computer chose ${compChoice}`);
    determineWinner(uChoice, compChoice);
};
main();