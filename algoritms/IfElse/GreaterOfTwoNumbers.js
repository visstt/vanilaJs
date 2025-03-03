const readline = require("readline-sync");
while (true) {
  let num1 = Number(readline.question("Enter first number: "));
  let num2 = Number(readline.question("Enter second number: "));

  if (num1 > num2) {
    console.log(`Larger number: ${num1}`);
  } else {
    console.log(`Larger number: ${num2}`);
  }
}
