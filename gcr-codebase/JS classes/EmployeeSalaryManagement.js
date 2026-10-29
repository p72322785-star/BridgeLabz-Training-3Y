
// Q10: Employee Salary Management System

// Create an Employee class.
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Calculate annual salary.
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply a bonus percentage.
    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }

    // Display employee details.
    displayDetails() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Monthly Salary: Rs.", this.salary);
        console.log("Annual Salary: Rs.", this.getAnnualSalary());
        console.log("-------------------------");
    }
}

// Create employee objects.
const employees = [
    new Employee(101, "Priya", 25000),
    new Employee(102, "Rahul", 35000),
    new Employee(103, "Aman", 40000),
    new Employee(104, "Neha", 28000),
    new Employee(105, "Riya", 45000)
];

// Apply a 10% bonus to every employee.
for (const employee of employees) {
    employee.applyBonus(10);
}

// Display all employee details.
console.log("EMPLOYEE DETAILS");

for (const employee of employees) {
    employee.displayDetails();
}

// Calculate total annual salary expenditure.
let totalSalary = 0;

for (const employee of employees) {
    totalSalary += employee.getAnnualSalary();
}

console.log("Total Annual Salary: Rs.", totalSalary);

// Find employees earning more than Rs. 30,000 monthly.
const highSalaryEmployees = employees.filter(
    employee => employee.salary > 30000
);

console.log("\nEmployees earning above Rs. 30,000:");

for (const employee of highSalaryEmployees) {
    console.log(employee.name, "- Rs.", employee.salary);
}