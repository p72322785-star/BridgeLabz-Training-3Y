
 // Generate 8 random scores between 30 and 100
let scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

// Calculate highest and lowest scores
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Calculate average using reduce()
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

// Count students who passed
let passedStudents = scores.filter(score => score >= 50);

// Display results
console.log("Student Scores:", scores);
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Average Score:", average.toFixed(2));
console.log("Students Passed:", passedStudents.length);
console.log("Passed Scores:", passedStudents);
