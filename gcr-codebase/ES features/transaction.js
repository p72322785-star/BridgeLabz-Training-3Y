const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (transaction.id == null || transaction.amount == null) {
            throw new Error("MISSING_DATA");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);
        console.log("Valid transaction:", transaction);
    } catch (error) {
        invalid.push({ transaction, reason: error.message });
        console.log("Invalid transaction:", error.message);
    }
}

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful count:", valid.length);
console.log("Failed count:", invalid.length);