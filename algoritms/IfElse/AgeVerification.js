const readline = require("readline-sync");
while (true) {
  let num = Number(readline.question("Enter your age: "));

  if (num < 18) {
    console.log("Access denied");
  } else {
    console.log("Access allowed");
  }
}
