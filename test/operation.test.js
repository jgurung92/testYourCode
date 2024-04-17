// the functions to be tested with jest test framework.

const { add, subtract, multiply, divide, power } = require('../src/operation');

// test case for addition
describe('add function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });    
});

// // test case for subtraction
describe('subtract function', () => {
    test('subtracts 2 - 1 to equal 1', () => {
        expect(subtract(2, 1)).toBe(1);
    });    
});

// test case for multiplication
describe('multiply function', () => {
    test('multiplies 2 * 3 to equal 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });   
});

// test case for division
describe('divide function', () => {
    test('divides 6 / 2 to equal 3', () => {
        expect(divide(6, 2)).toBe(3);
    });    
});

// test case for power
describe ('power function', () => {
    test('calculates power of 2^3 to equal 8', () => {
        expect(power(2, 3)).toBe(8);
    });

    test('calculates power of 4^0 to equal 1', () => {
        expect(power(4, 0)).toBe(1);
    }); 
});


