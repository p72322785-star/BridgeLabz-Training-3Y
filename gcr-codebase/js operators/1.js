
 // Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only if the employee is permanent
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log("Total Salary: " + salary);
    console.log("Global Bonus: " + bonus);

    // Changing the global variable
    bonus = 6000;
    console.log("Updated Global Bonus: " + bonus);
}

// Test both conditions
calculateSalary(true);
calculateSalary(false);
