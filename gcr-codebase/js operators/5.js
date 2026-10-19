
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check security conditions
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test another outcome
isDoorLocked = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test using NOT operator
console.log("Door is unlocked:", !isDoorLocked);

// Test using OR operator
if (!isDoorLocked || !isWindowClosed) {
    console.log("Security Warning");
}
