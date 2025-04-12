// #4 Create a two MDAS operation and display the highest number using if-else

const addOperator = (a, b, c, d) => a + b + c + d;
const subOperator = (a, b, c, d) => a - b - c - d;

console.log(resultA = addOperator(2, 3, 4, 5)); // 14
console.log(resultB = subOperator(2, 3, 4, 5)); // -10

if (resultA > resultB) {
    console.log ("Result A (" + resultA + ") is greater than Result B (" + resultB + ")");
} else if (resultA < resultB) {
    console.log ("Result B (" + resultB + ") is greater than Result A (" + resultA + ")");
} else {
    console.log ("Result A (" + resultA + ") is equal to Result B (" + resultB + ")");
}