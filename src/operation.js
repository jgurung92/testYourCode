// functions to test

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
};
