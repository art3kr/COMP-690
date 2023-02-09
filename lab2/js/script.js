let milesDriven = parseInt(prompt('Enter the number of miles you have driven'));
let gallons = parseInt(prompt('How many gallons of fuel does you vehicle hold?'));
let mpg = milesDriven / gallons;

console.log(`Your vehicle gets ${mpg.toFixed(2)} miles per gallon`)