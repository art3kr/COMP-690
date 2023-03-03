//STEP 1
function halfNumber(inputNum) {
    let changedNum = inputNum/2;
    console.log(`Half of ${inputNum} is ${changedNum}`);
    return changedNum;
}

//STEP 2
function squareNumber(inputNum){
    let squaredNum = Math.pow(inputNum, 2);
    console.log(`The result of squaring the number ${inputNum} is ${squaredNum}`);
    return squaredNum;
}
//STEP 3
function percentOf(inputNum1, inputNum2) {
    let percent = (100 * inputNum1/inputNum2).toFixed(0);
    console.log(`${inputNum1} is ${percent}% of ${inputNum2}`);
    return percent;
}

//STEP 4
function findModulus(inputNum1, inputNum2) {
    let modulus = inputNum1 % inputNum2;
    console.log(`${modulus} is the modulus of ${inputNum1} and ${inputNum2}`);
    return modulus;
}

//STEP 5
function main() {
    halfNumber(10);
    squareNumber(10);
    percentOf(10, 20);
    findModulus(10, 6);
}
main();