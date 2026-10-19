
 // Declare variables of different data types
const userName = "Priya";
const age = 20;
const isStudent = true;
const subjects = ["JavaScript", "Java", "Python"];
const user = { name: "Priya", city: "Mathura" };
const middleName = null;
let address;

// Identify types and prepare a formatted report
const report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Middle Name", Value: middleName, Type: "null" },
    { Label: "Address", Value: address, Type: typeof address }
];

// Display all data in one table
console.table(report);
