const sum = require('../src/sum');

test('adds 1 + 2 to equal 32', () => {
    expect(sum(1, 2)).toBe(3);
});

test('check if numbers are integers', () => {
    expect(sum("test", "test")).not.toBe(Number);
});
