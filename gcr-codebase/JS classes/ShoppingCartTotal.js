
// Q9: Shopping Cart Total Calculator

class Cart {
    constructor() {
        this.items = [];
    }

    // Add an item to the cart
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    // Calculate the total price
    getTotal() {
        let total = 0;

        for (const item of this.items) {
            total += item.price * item.quantity;
        }

        return total;
    }

    // Apply a discount coupon
    applyCoupon(coupon) {
        const pattern = /^(SAVE|DISC)(\d{1,2})$/i;
        const result = coupon.trim().match(pattern);

        if (result === null) {
            console.log("Invalid coupon code!");
            return this.getTotal();
        }

        const discount = Number(result[2]);

        if (discount < 1 || discount > 100) {
            console.log("Discount must be between 1 and 100!");
            return this.getTotal();
        }

        const total = this.getTotal();
        const finalTotal = total - (total * discount / 100);

        console.log("Discount Applied: " + discount + "%");

        return finalTotal;
    }
}

//