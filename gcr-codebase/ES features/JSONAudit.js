
"use strict";

/*
Q9 – JSON Audit

Tasks:
1. Parse each JSON entry using try...catch.
2. Detect missing keys (user, age) and invalid JSON.
3. Store valid entries in a clean array.
4. Log errors with line numbers.
5. Convert age to Number and filter users under 18.
*/

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}',
    '{"user":"Rahul","age":"16"}'
];

const cleanData = [];

// Process every JSON entry
for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    console.log(`\nChecking line ${lineNumber}:`);

    try {
        // Convert JSON string into a JavaScript object
        const record = JSON.parse(rawData[i]);

        console.log("JSON parsed successfully.");

        // Check required keys
        if (!Object.hasOwn(record, "user")) {
            throw new Error("Missing key: user");
        }

        if (!Object.hasOwn(record, "age")) {
            throw new Error("Missing key: age");
        }

        // Convert age into a number
        const age = Number(record.age);

        // Validate the data
        if (
            typeof record.user !== "string" ||
            record.user.trim() === "" ||
            record.age === null ||
            record.age === "" ||
            !Number.isFinite(age) ||
            age < 0
        ) {
            throw new Error("Invalid user or age value.");
        }

        // Add valid records to the clean array
        const cleanRecord = {
            user: record.user,
            age: age
        };

        cleanData.push(cleanRecord);

        console.log("Valid record:", cleanRecord);

    } catch (error) {
        console.log(`Error at line ${lineNumber}: ${error.message}`);
    }
}

// Display valid records
console.log("\n========== CLEAN DATA ==========");
console.log(cleanData);

// Filter users under 18
const under18 = cleanData.filter(record => record.age < 18);

console.log("\n========== USERS UNDER 18 ==========");
console.log(under18);

/*
EXPECTED CLEAN DATA:

[
  { user: "Alex", age: 25 },
  { user: "Mina", age: 22 },
  { user: "Rahul", age: 16 }
]

EXPECTED ERRORS:
Line 2: Missing key: user
Line 3: Invalid JSON syntax

USERS UNDER 18:
[{ user: "Rahul", age: 16 }]

DEBUGGING STEPS:

1. The loop reads one entry at a time.
2. JSON.parse() converts valid JSON into an object.
3. Invalid JSON throws a SyntaxError.
4. Missing keys throw a custom Error.
5. The catch block prints the line number and error message.
6. The loop continues with the next entry.
7. Valid records are added to cleanData.
8. filter() selects records whose age is below 18.

IMPORTANT:
The age "22" is a string in the original JSON.
Number() converts it into the number 22.
The original rawData array remains unchanged.
*/
