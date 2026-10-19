
 // Generate two random numbers between 1 and 20
const number1 = Math.floor(Math.random() * 20) + 1;
const number2 = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

let answer;

// Calculate the correct answer using switch
switch (operator) {
    case "+":
        answer = number1 + number2;
        break;
    case "-":
        answer = number1 - number2;
        break;
    case "*":
        answer = number1 * number2;
        break;
    case "/":
        answer = number1 / number2;
        break;
}

// Format division answers to two decimal places
if (operator === "/") {
    answer = answer.toFixed(2);
}

// Display the question and answer
console.log(`Question: ${number1} ${operator} ${number2}`);
console.log(`Correct Answer: ${answer}`);
