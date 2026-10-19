
 // Store expenses for five categories
const expenses = [5000, 1500, 8000, 2000, 1000];

// Calculate the total expenses
let total = 0;

for (let expense of expenses) {
    total += expense;
}

// Calculate average and tax
const average = total / expenses.length;
const tax = total * 0.10;
total += tax;

// Display the results with two decimal places
console.log(`Total Expenses Before Tax: ₹${(total - tax).toFixed(2)}`);
console.log(`Average Monthly Expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${total.toFixed(2)}`);
