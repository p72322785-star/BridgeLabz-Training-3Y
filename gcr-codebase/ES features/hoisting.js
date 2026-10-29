console.log(score);
announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
    console.log(status);
}
/* output---
undefined
Game started
ready

explaination--
var score: Hoisted and initialized with undefined.



announce(): Function declaration is fully hoisted, so it can be called before its definition.



let status: Hoisted but remains in the Temporal Dead Zone (TDZ) until initialization. Here, it is initialized before startGame() is called.



startGame(): Function declaration is hoisted, and it prints the initialized value of status.
*/