let resultArray;

function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz"
    } else if (number % 3 === 0 || number.toString().includes('3')) {
        return "Fizz"
    } else if (number % 5 === 0 || number.toString().includes('5')) {
        return "Buzz"
    }
    return number
}

function createArray(number) {
    let array = [];
    for (let i = 0; i <= 100; i++) {
        array.push(fizzbuzz(i))
    }
    // console.log(array);
    return array[number]
}


module.exports = createArray;


