function sum(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error('Cannot divide by zero');
    }
    return num1 / num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

module.exports = {
    sum,
    multiply,
    divide,
    subtract
};