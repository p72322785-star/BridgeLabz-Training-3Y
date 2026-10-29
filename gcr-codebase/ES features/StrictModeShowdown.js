
"use strict";

/*
Q8 – Strict Mode Showdown

Tasks:
1. Test the code with and without strict mode.
2. Observe errors and differences.
3. Explain why strict mode makes these operations illegal.
4. Write a correct version using ES6 rules.
*/

// WITHOUT STRICT MODE
// Run this part separately in a non-strict classic JavaScript script.
// Duplicate parameters are allowed in non-strict functions.

function demoWithoutStrict(a, a) {
    totalWithoutStrict = 10;
    console.log("Without strict mode:");
    console.log("Second parameter:", a);
    console.log("Total:", totalWithoutStrict);

    // Deleting this global property succeeds in a typical Node.js
    // CommonJS script because the property is configurable.
    delete globalThis.totalWithoutStrict;
}

demoWithoutStrict(5, 10);


// WITH STRICT MODE
function demoWithStrict() {
    "use strict";

    console.log("\nWith strict mode:");

    try {
        total = 10;
    } catch (error) {
        console.log("Undeclared variable:", error.name);
        console.log(error.message);
    }
}

demoWithStrict();


// CORRECT VERSION USING ES6 RULES
function correctDemo(a, b) {
    "use strict";

    let total = a + b;

    console.log("\nCorrect ES6 version:");
    console.log("First parameter:", a);
    console.log("Second parameter:", b);
    console.log("Total:", total);
}

correctDemo(5, 10);


/*
EXPECTED OUTPUT:

Without strict mode:
Second parameter: 10
Total: 10

With strict mode:
Undeclared variable: ReferenceError

Correct ES6 version:
First parameter: 5
Second parameter: 10
Total: 15


IMPORTANT DIFFERENCES:

1. Duplicate parameters:
   function demo(a, a) is allowed in non-strict mode.
   It causes a SyntaxError in strict mode.

2. Undeclared variables:
   Assigning total = 10 without declaring total creates a global
   variable in a typical non-strict script.
   Strict mode throws a ReferenceError.

3. Delete operator:
   Deleting an unqualified variable identifier is illegal in
   strict mode and causes a SyntaxError.
   Use delete for object properties instead.

4. ES6 rules:
   Use let or const to declare variables.
   Use different parameter names.
   Avoid accidental global variables.

DEBUGGING:
- The first function demonstrates non-strict behavior.
- The second function catches a ReferenceError.
- The final function uses valid parameters and a declared variable.

NOTE:
To test the exact original code with and without strict mode,
run each version as a separate script. A SyntaxError in strict
mode prevents the entire affected script from executing.
*/
