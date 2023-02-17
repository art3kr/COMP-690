let randomNum = Math.round(Math.random())
let result;
let choice;
choice = prompt('Select Heads or Tails');

if (randomNum  === 1) {
    result = 'Heads';
} else {
    result = 'Tails';
}

if (choice === 'Heads') {
    if (result === 'Heads') {
        alert('The flip was heads and you chose heads...you win!');
    } else if (result === 'Tails') {
        alert('The flip was tails but you chose heads...you lose!')
    }
} else if (choice === 'Tails') {
    if (result === 'Tails') {
        alert('The flip was tails and you chose tails...you win!')
    } else if (result === 'Heads') {
        alert('The flip was heads but you chose tails...you lose!')
    }
} else {
    alert("Did not select Heads or Tails")
}