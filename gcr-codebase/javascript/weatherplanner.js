
 // Declare weather conditions
const temperature = 12;
const isRaining = false;
const windSpeed = 25;

// Suggest an activity based on the weather
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

// Example of combining && and ||
if ((temperature > 35 && !isRaining) || windSpeed > 40) {
    console.log("Take extra precautions outdoors.");
}
