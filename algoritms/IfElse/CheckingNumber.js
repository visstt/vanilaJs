const readline = require("readline-sync");

let num = Number(readline.question("Enter number: "));

if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("null");
}
