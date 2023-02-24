let coinFlip;

do {
    let randomNum = Math.round(Math.random());
    if (randomNum == 0) {
        coinFlip = 'Heads';
        console.log(coinFlip);
    } else {
        coinFlip = 'Tails';
        console.log(coinFlip);
    }
} while (coinFlip === 'Heads');