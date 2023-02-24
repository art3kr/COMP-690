let randomNum = Math.round(Math.random());
let coinFlip;

for (let i = 0; i < 5; i++) {
    let randomNum = Math.round(Math.random());
    if (randomNum == 0) {
        coinFlip = 'Heads';
        console.log(coinFlip);
    } else {
        coinFlip = 'Tails';
        console.log(coinFlip);
    }
}