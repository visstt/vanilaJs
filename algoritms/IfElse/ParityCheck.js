const readline = require("readline-sync");

let num = Number(readline.question("Enter number: "));

if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("not even");
}
