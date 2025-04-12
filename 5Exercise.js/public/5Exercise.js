// #5 Create a folder. Run #4 using node.js. Display on a website with 4 coca-cola pictures.

const addOperator = (a, b, c, d) => a + b + c + d;
const subOperator = (a, b, c, d) => a - b - c - d;

const resultA = addOperator(2, 3, 4, 5); // 14
const resultB = subOperator(2, 3, 4, 5); // -10

let resultMessage = '';
if (resultA > resultB) {
    resultMessage = `Result A (${resultA}) is greater than Result B (${resultB})`;
} else if (resultA < resultB) {
    resultMessage = `Result B (${resultB}) is greater than Result A (${resultA})`;
} else {
    resultMessage = `Result A (${resultA}) is equal to Result B (${resultB})`;
}

// Display the results on the webpage
document.querySelector('.mdas-info').innerHTML += `<p>${resultMessage}</p>`;