const romanize = require('../src/roman');

test('2020 = MMXX', () => {
    expect(romanize(2020)).toBe('MMXX');
});


test('1000 = M', () => {
    expect(romanize(1000)).toBe('M');
});

test('900 = CM', () => {
    expect(romanize(900)).toBe('CM');
});

test('500 = D', () => {
    expect(romanize(500)).toBe('D');
});

test('400 = CD', () => {
    expect(romanize(400)).toBe('CD');
});

test('100 = C', () => {
    expect(romanize(100)).toBe('C');
});

test('90 = XC', () => {
    expect(romanize(90)).toBe('XC');
});

test('50 = L', () => {
    expect(romanize(50)).toBe('L');
});

test('40 = XL', () => {
    expect(romanize(40)).toBe('XL');
});

test('10 = X', () => {
    expect(romanize(10)).toBe('X');
});

test('9 = IX', () => {
    expect(romanize(9)).toBe('IX');
});

test('5 = V', () => {
    expect(romanize(5)).toBe('V');
});

test('4 = IV', () => {
    expect(romanize(4)).toBe('IV');
});

test('1 = I', () => {
    expect(romanize(1)).toBe('I');
});




