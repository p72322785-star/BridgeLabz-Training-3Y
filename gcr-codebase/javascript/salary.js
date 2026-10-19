
 // Declare current salary and annual increment rate
let salary = 40000;
const incrementRate = 10;
const projection = [];

// Calculate salary for the next five years
for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;

    projection.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

// Display the yearly salary projection
console.table(projection);
