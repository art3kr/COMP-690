//STEP 1
// function alphabetical(inputString) {
//     splitArray = inputString.split('');
//     return console.log(splitArray.sort().join(''));
// }
// alphabetical('webmaster');

//STEP 2
// function firstUpperCase(inputString) {
//     return console.log(inputString[0].toUpperCase() + inputString.slice(1));
// }
// firstUpperCase('the quick brown fox');

//STEP 3
// function countVowels(inputString) {
//     let match = inputString.match(/[aeiou]/gi);
//     return console.log(match.length);
// }
// countVowels('The quick brown fox');

//STEP 4
// function stringIDofLength(length) {
//     let charsToChoose = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let output = '';
//     for (let i = 0; i <= length; i++) {
//         output += charsToChoose[Math.floor(Math.random() * 53)]
//     }
//     console.log(output);
// }
// stringIDofLength(5);

//STEP 5
function longestCountryName(inputArray) {
    let longestLength = -Infinity;
    let longestCountry;
    for (country of inputArray) {
        if (country.length > longestLength) {
            longestLength = country.length;
            longestCountry = country;
        }
    }
    console.log(longestCountry);
}
longestCountryName(["Australia", "Germany", "United States of America"]);