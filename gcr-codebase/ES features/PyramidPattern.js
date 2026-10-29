
"use strict";

/*
Q6 – Pyramid Pattern Generator

1. Generate a pyramid pattern.
2. Replace let with var and observe changes.
3. Take the number of rows from user input (default = 5).
4. Use strict mode to catch undeclared variables.

Expected output for 4 rows:
*
* *
* * *
* * * *
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Using let to generate the pyramid
function pyramidUsingLet(rows) {
    console.log("\nPyramid using let:");

    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trimEnd());
    }
}

// Using var to generate the pyramid
function pyramidUsingVar(rows) {
    console.log("\nPyramid using var:");

    for (var i = 1; i <= rows; i++) {
        var pattern = "";

        for (var j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trimEnd());
    }

    // var is function-scoped, so i is accessible here.
    console.log("Final value of i:", i);
}

// Strict mode demonstration
function strictModeDemo() {
    console.log("\nStrict Mode Test:");

    try {
        undeclaredVariable = 100;
    } catch (error) {
        console.log("Error:", error.name);
        console.log("Message:", error.message);
    }
}

/*
DEBUGGING STEPS:
1. The outer loop controls the number of rows.
2. The inner loop adds stars to the pattern.
3. After each row, the pattern is printed.
4. let is block-scoped, while var is function-scoped.
5. Both versions print the same pyramid.
6. Strict mode throws a ReferenceError for an undeclared variable.
*/

rl.question(
    "Enter number of rows (press Enter for default 5): ",
    (input) => {
        const rows = input.trim() === "" ? 5 : Number(input);

        if (!Number.isInteger(rows) || rows < 1 || rows > 50) {
            console.log("Please enter a number between 1 and 50.");
        } else {
            pyramidUsingLet(rows);
            pyramidUsingVar(rows);
            strictModeDemo();
        }

        rl.close();
    }
);
