window.onload = function () {
    // #1 Operator Sum
    let a1 = 2, b1 = 3, c1 = 4;
    let result1 = a1 + b1 + c1 + 100;
    alert(`#1 Operator Sum: ${result1}`); // 109

    // #2 Operator Sum & Difference
    let a2 = 2, b2 = 3;
    let result2 = a2 + b2 + 200 - 500;
    alert(`#2 Operator Sum & Difference: ${result2}`); // -295

    // #3 MDAS Operation
    const addOperator = (a, b, c, d) => a + b + c + d;
    let result3 = addOperator(2, 3, 4, 5);
    alert(`#3 MDAS Operation: ${result3}`); // 14

    // #4 Two MDAS Operations and Comparison
    const subOperator = (a, b, c, d) => a - b - c - d;
    let resultA = addOperator(2, 3, 4, 5); // 14
    let resultB = subOperator(2, 3, 4, 5); // -10

    if (resultA > resultB) {
        alert(`#4 Two MDAS Operations: Result A (${resultA}) is greater than Result B (${resultB})`);
    } else if (resultA < resultB) {
        alert(`#4 Two MDAS Operations: Result B (${resultB}) is greater than Result A (${resultA})`);
    } else {
        alert(`#4 Two MDAS Operations: Result A (${resultA}) is equal to Result B (${resultB})`);
    }
};