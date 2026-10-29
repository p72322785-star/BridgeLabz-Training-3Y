
"use strict";

/*
Q7 – Smart Calculator

Tasks:
1. Use switch to handle add, divide, power, root, and subtract.
2. Handle division by zero.
3. Handle square root of a negative number.
4. Throw InvalidOperationError for an unknown operation.
5. Use try...catch and print a formatted summary.
*/

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

// Custom error class for invalid operations
class InvalidOperationError extends Error {
    constructor(operation) {
        super("Invalid operation: " + operation);
        this.name = "InvalidOperationError";
    }
}

// Calculator function using switch
function calculate(operation, num1, num2) {
    switch (operation) {
        case "add":
            return num1 + num2;

        case "divide":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero.");
            }
            return num1 / num2;

        case "power":
            return num1 ** num2;

        case "root":
            if (num1 < 0) {
                throw new Error(
                    "Cannot find the real square root of a negative number."
                );
            }
            return Math.sqrt(num1);

        case "subtract":
            return num1 - num2;

        default:
            throw new InvalidOperationError(operation);
    }
}

// Execute each operation and handle errors
console.log("========== SMART CALCULATOR ==========");
console.log("Number 1:", num1);
console.log("Number 2:", num2);

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);

        console.log(
            `Operation: ${operation} | Result: ${result}`
        );
    } catch (error) {
        console.log(
            `Operation: ${operation} | ${error.name}: ${error.message}`
        );
    }
}

// Test an invalid operation
try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log("\nInvalid operation test:");
    console.log(error.name + ": " + error.message);
}

/*
EXPECTED OUTPUT:
add       -> 25
divide    -> Error: Cannot divide by zero.
power     -> 1
root      -> 5
subtract  -> 25

Invalid operation test:
InvalidOperationError: Invalid operation: multiply

DEBUGGING STEPS:
1. The loop takes one operation at a time.
2. The switch selects the matching case.
3. The return statement gives the calculated result.
4. Division by zero throws an Error.
5. An unknown operation throws InvalidOperationError.
6. The catch block displays the error without stopping the program.

NOTE:
- power calculates num1 raised to num2.
- root calculates the square root of num1.
*/
