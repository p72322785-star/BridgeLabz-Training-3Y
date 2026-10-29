
"use strict";

/*
Q10 – Nested Hoisting and Closures

Tasks:
1. Predict and explain the output.
2. Show how hoisting creates separate memory contexts.
3. Convert the inner function to an arrow function.
4. Explain debugging and call stack flow.
*/

// Original example using a normal inner function
function outer() {
    console.log("Outer before declaration:", count);

    var count = 5;

    console.log("Outer after assignment:", count);

    function inner() {
        console.log("Inner before declaration:", count);

        var count = 10;

        console.log("Inner after assignment:", count);
    }

    inner();

    console.log("Outer after inner:", count);
}

console.log("===== NORMAL FUNCTION =====");
outer();

/*
EXPECTED OUTPUT:

Outer before declaration: undefined
Outer after assignment: 5
Inner before declaration: undefined
Inner after assignment: 10
Outer after inner: 5

EXPLANATION:

1. var count is hoisted to the top of outer().
2. Its initial value is undefined.
3. count is assigned 5.
4. inner() creates its own function execution context.
5. Its local var count is also hoisted and starts as undefined.
6. The inner count becomes 10.
7. The outer count remains 5.

The inner and outer functions have separate local variables.
*/


// Example using an arrow function
function outerWithArrow() {
    console.log("\nOuter before declaration:", count);

    var count = 5;

    console.log("Outer after assignment:", count);

    const inner = () => {
        console.log("Arrow before declaration:", count);

        var count = 10;

        console.log("Arrow after assignment:", count);
    };

    inner();

    console.log("Outer after arrow:", count);
}

console.log("\n===== ARROW FUNCTION =====");
outerWithArrow();

/*
EXPECTED OUTPUT:

Outer before declaration: undefined
Outer after assignment: 5
Arrow before declaration: undefined
Arrow after assignment: 10
Outer after arrow: 5

EXPLANATION:

The arrow function also has its own local var count.
Therefore, the output is the same as the normal function example.

Arrow functions differ in their handling of this, arguments,
and constructor behavior, but var is still hoisted inside
their function body.
*/


// Debugging the call stack
function first() {
    console.log("\nfirst() started");
    second();
    console.log("first() ended");
}

function second() {
    console.log("second() started");
    third();
    console.log("second() ended");
}

function third() {
    console.log("third() started");
    console.log("third() ended");
}

console.log("\n===== CALL STACK DEBUGGING =====");
first();

/*
EXPECTED OUTPUT:

first() started
second() started
third() started
third() ended
second() ended
first() ended

CALL STACK FLOW:

Step 1: Global code calls first().
Step 2: first() is pushed onto the call stack.
Step 3: first() calls second(); second() is pushed.
Step 4: second() calls third(); third() is pushed.
Step 5: third() finishes and is popped off the stack.
Step 6: second() resumes, finishes, and is popped.
Step 7: first() resumes, finishes, and is popped.
Step 8: Execution returns to global code.

IMPORTANT:
Hoisting moves declarations to the top of their scope
during execution setup. It does not move assignments.
*/
