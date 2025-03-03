const readline = require("readline-sync");

while (true) {
  let num = Number(readline.question("Enter the purchase amount: "));

  if (num < 1000) {
    console.log("No discount available");
  } else if (num > 1000 && num < 5000) {
    const numDisc5 = num - (num / 100) * 5;
    console.log(`Amount including 5% discount: ${numDisc5}`);
  } else if (num > 5000) {
    const numDisc10 = num - (num / 100) * 10;
    console.log(`Amount including 10% discount: ${numDisc10}`);
  }
}
