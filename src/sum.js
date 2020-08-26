function sum(a, b) {
    if (Number.isInteger(a + b)) {
        return a + b;
    } else {
        return "Inputs must be Integers."
    }
}

module.exports = sum;