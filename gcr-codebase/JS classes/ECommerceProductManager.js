
/*
ASSIGNMENT 4 - Q1
E-Commerce Product Manager

Concepts:
1. Classes and objects
2. Constructor
3. Methods
4. Arrays
5. filter()

Tasks:
- Create a Product class.
- Apply a 10% discount.
- Display product details.
- Filter products with price greater than 1000.
*/

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount to the product price
    applyDiscount(discountPercent) {
        this.price = this.price - (this.price * discountPercent / 100);
    }

    // Display product details in a formatted string
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Notebook", 100, "Stationery"),
    new Product(4, "Smartphone", 20000, "Electronics"),
    new Product(5, "Pen", 50, "Stationery")
];

// Apply a 10% discount to every product
products.forEach(product => {
    product.applyDiscount(10);
});

// Display all products
console.log("========== ALL PRODUCTS ==========");

products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter products whose discounted price is greater than 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\n========== PRODUCTS ABOVE ₹1000 ==========");

expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});

/*
EXPECTED OUTPUT:

========== ALL PRODUCTS ==========
ID: 1 | Name: Laptop | Price: ₹45000.00 | Category: Electronics
ID: 2 | Name: Headphones | Price: ₹1350.00 | Category: Electronics
ID: 3 | Name: Notebook | Price: ₹90.00 | Category: Stationery
ID: 4 | Name: Smartphone | Price: ₹18000.00 | Category: Electronics
ID: 5 | Name: Pen | Price: ₹45.00 | Category: Stationery

========== PRODUCTS ABOVE ₹1000 ==========
Laptop
Headphones
Smartphone

EXPLANATION:
1. The constructor initializes each product's properties.
2. applyDiscount() reduces the product price by 10%.
3. displayDetails() returns formatted product information.
4. forEach() visits each product in the array.
5. filter() creates a new array containing products priced above ₹1000.

NOTE:
The filter checks the discounted prices.
*/
