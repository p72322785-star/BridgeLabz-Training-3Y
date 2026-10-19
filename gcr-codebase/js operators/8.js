
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate original cart value
let total = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

// Apply category-wise discounts
for (let product of cart) {
    let price = product.price;

    if (product.category === "electronics") {
        price = price - price * 0.10;
    } else if (product.category === "fashion") {
        price = price - price * 0.05;
    }

    discountedTotal += price;
}

// Apply additional discount if original cart total exceeds 50000
if (total > 50000) {
    discountedTotal = discountedTotal - discountedTotal * 0.05;
}

console.log("Original Cart Total: ₹" + total);
console.log("Final Cart Total: ₹" + discountedTotal.toFixed(2));
console.log("Total Savings: ₹" + (total - discountedTotal).toFixed(2));
