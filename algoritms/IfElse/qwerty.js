const value1 = 1234;
const value2 = "jfvhf";

console.log(`первое значение: ${typeof value1}`);
console.log(`второе значение: ${typeof value2}`);
console.log(String(Number(value1)) == String(NaN));

if (
  String(Number(value1)) !== String(NaN) &&
  String(Number(value2)) !== String(NaN)
) {
  console.log(`сумма: ${Number(value2) + Number(value1)}`);
} else {
  console.log("error");
}
