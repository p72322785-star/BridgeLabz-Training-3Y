
 // Declare age and citizenship status
const age = 20;
const isCitizen = true;

// Check eligibility using nested if-else
if (isCitizen) {
    if (age >= 18) {
        if (age >= 21) {
            console.log("Eligible for all services.");
        } else {
            console.log("Eligible to vote only.");
        }
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
