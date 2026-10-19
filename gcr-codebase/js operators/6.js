
let count = 0;

// Increase counter
function increment() {
    count++;
    console.log("Count after increment:", count);
}

// Decrease counter
function decrement() {
    count--;
    console.log("Count after decrement:", count);
}

// Nested function to demonstrate scope
function showCount() {
    function display() {
        console.log("Current Count:", count);
    }

    display();
}

// Simulate clicks
increment();
increment();
decrement();
showCount();
