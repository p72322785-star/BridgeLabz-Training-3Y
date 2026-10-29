
"use strict";

/*
ASSIGNMENT 4 - Q6
Employee Management System

Concepts:
1. Classes and objects
2. Constructor and methods
3. Annual salary calculation
4. applyBonus()
5. reduce() to calculate total annual payout
*/

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus to the monthly salary
    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }

    // Display employee details
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Department: ${this.department} | Annual Salary: ₹${this.getAnnualSalary().toFixed(2)}`;
    }
}

// Create five employee objects
const employees = [
    new Employee(1, "Priya", "IT", 30000),
    new Employee(2, "Rahul", "HR", 25000),
    new Employee(3, "Aman", "Finance", 40000),
    new Employee(4, "Neha", "Marketing", 35000),
    new Employee(5, "Riya", "IT", 45000)
];

// Apply a 10% bonus to every employee
employees.forEach(employee => {
    employee.applyBonus(10);
});

// Display employee details and annual salaries
console.log("========== EMPLOYEE DETAILS ==========");

employees.forEach(employee => {
    console.log(employee.displayDetails());
});

// Calculate the company's total annual payout
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log("\n========== COMPANY SUMMARY ==========");
console.log(
    "Total Annual Payout: ₹" + totalAnnualPayout.toFixed(2)
);

/*
EXPECTED ANNUAL SALARIES AFTER 10% BONUS:

Priya  : ₹396000
Rahul  : ₹330000
Aman   : ₹528000
Neha   : ₹462000
Riya   : ₹594000

Total Annual Payout: ₹2310000

EXPLANATION:

1. The constructor initializes employee details.
2. salary represents the monthly salary.
3. getAnnualSalary() multiplies the monthly salary by 12.
4. applyBonus(10) increases the monthly salary by 10%.
5. forEach() applies the bonus to each employee.
6. reduce() adds all annual salaries to calculate the
   company's total annual payout.

NOTE:
The bonus is applied to the monthly salary before calculating
the annual salary. Therefore, the annual payout includes the bonus.
*/
