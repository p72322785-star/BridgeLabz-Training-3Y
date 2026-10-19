
 // Store marks of five subjects
const marks = [90, 85, 78, 88, 92];

// Calculate total, average, and percentage
const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;
const percentage = (total / (marks.length * 100)) * 100;

// Check if any subject has marks below 35
const failed = marks.some(mark => mark < 35);

// Display performance details
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);

// Decide promotion status
if (failed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
