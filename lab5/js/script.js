// Variables 
let miles, gallons, mpg;
let again = 'y';
do {
    miles = parseFloat(prompt('Enter the number of miles drive'));
    gallons = parseFloat(prompt('Enter the gallon capacity of the tank'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles/gallons;
        console.log(`Your vehicle gets ${mpg.toFixed(2)} miles per gallon`);
    } else {
        alert('One of both of your entries are wrong');
    }
    again = prompt('do you want to run this application again? (y/n');
} while (again === 'y')
console.log("application has ended");