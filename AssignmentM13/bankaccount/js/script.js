// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id);

let balance = Number(0);

const bankAccount = function (owner) {
    // PRIVATE VARIABLES AND FUNCTIONS
    let ownerName = owner;
    let balance = 0;

    return {
        getBalance: function () {
            return balance;
        },
        getOwner: function () {
            return ownerName;
        },
        deposit: function (depositAmount) {
            balance += Number(depositAmount);
        },
        withdrawal: function (withdrawalAmount) {
            balance -= Number(withdrawalAmount);
        }
    }
}

window.addEventListener('load', () => {
    let outputName = $('outputName');
    let outputBalance = $('outputBalance');
    outputBalance.innerHTML = `$${balance.toFixed(2)}`;

    // NAME BUTTON
    $('nameButton').onclick = function() {
        let name = prompt('What is your name?');
        // Create bank account
        account = bankAccount(name);
        outputName.innerHTML = name;
    };

    // DEPOSIT BUTTON
    $('depositButton').onclick = function() {
        let deposit = prompt('How much to deposit?');
        account.deposit(deposit);
        outputBalance.innerHTML = `$${account.getBalance().toFixed(2)}`;
    };

    // WITHDRAWAL BUTTON
    $('withdrawalButton').onclick = function() {
        let withdrawal = prompt('How much to withdraw?');
        account.withdrawal(withdrawal);
        outputBalance.innerHTML = `$${account.getBalance().toFixed(2)}`;
    };

})