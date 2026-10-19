
 // Declare the user's name and get the current hour
const userName = "Priya";
const currentHour = new Date().getHours();

// Display a greeting according to the time
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
