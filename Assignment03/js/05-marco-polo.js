let output;
for (let i = 1; i <= 100; i++) {
    output = '';
    if (i % 3 !== 0 && i % 5 !== 0) {
        output = i;
    }
    if (i % 3 === 0) {
        output += 'Marco!';
    } 
    if (i % 5 === 0) {
        output += 'Polo!';
    } 
    console.log(output);
}