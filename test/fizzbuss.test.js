const createArray = require('../src/fizzbuzz');

test('index contain Fizz', () => {
    expect(createArray(3)).toBe("Fizz");
});

test('index contain Buzz', () => {
    expect(createArray(5)).toBe("Buzz");
});

test('index contain FizzBuzz', () => {
    expect(createArray(15)).toBe("FizzBuzz");
});



