const createArray = require('../src/fizzbuzz');

test('index contain Fizz', () => {
    expect(createArray(3)).toBe("Fizz");
});

test('index contain Fizz', () => {
    expect(createArray(5)).toBe("Buzz");
});

test('index contain Fizz', () => {
    expect(createArray(15)).toBe("FizzBuzz");
});



