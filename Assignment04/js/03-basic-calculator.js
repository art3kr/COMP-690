// IMPORT THE MODULE
import { add, subtract, divide, multiply } from './modules/calculator.js';

let num1, num2, operation, result;
do {
    // COLLECT FIRST NUMBER FROM USER
    num1 = Number(prompt('Enter the first number'));

    // COLLECT SECOND NUMBER FROM USER
    num2 = Number(prompt('Enter the second number'));

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt('Enter the mathematical operation (+,-,*,/)');

    // CHECK TO SEE WHAT OPERATION THEY'RE USING
    // CALL THE APPROPRIATE FUNCTION
    switch(operation) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }

    
} while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/')

alert(`The result of ${num1} ${operation} ${num2} = ${result}`)
