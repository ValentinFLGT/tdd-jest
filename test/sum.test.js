const sum = require('../src/sum');

test('adds 1 + 2 to equal 32', () => {
    expect(sum(12, 25)).toBe(32);
});

test('check if numbers are integers', () => {
    expect(sum("test", "test")).not.toBe(Number);
});
