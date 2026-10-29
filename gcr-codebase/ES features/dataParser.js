const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const valid = [];
const invalid = [];

for (let value of apiData) {
    const num = Number(value);
    const bool = Boolean(value);
    const str = String(value);

    console.log(`Value: ${str}, Number: ${num}, Boolean: ${bool}, String: ${str}`);

    if (value === null || value === undefined || String(value).trim() === "" ||
        (typeof value === "string" && value.trim() === "NaN") ||
        !Number.isFinite(num)) {
        invalid.push(value);
        console.log("Invalid number:", value);
    } else {
        valid.push(num);
    }
}

console.log("Valid numbers:", valid);
console.log("Invalid values:", invalid);