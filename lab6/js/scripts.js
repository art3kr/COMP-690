// Variables
let futureValue, investment, rate, years;

// Collect values from user
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
rate = parseFloat(prompt('Enter the rate that your hoping to get on your investment? as x.x'));
years = parseInt(prompt('how many years do you want to invest for?'));

// Calculate
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// Display
document.write(`Investment amount: $${investment.toFixed(2)}<br>`)
document.write(`Interest rate: ${rate.toFixed(2)}<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}`)