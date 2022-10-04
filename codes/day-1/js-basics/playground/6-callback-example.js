const numbers = [2, 3, 1, 5, 4, 7, 8, 6, 0, 9]
const result = numbers.filter(
    function (num) {
        return num % 2 === 0
    }
)
console.log(result)

numbers.sort(
    function (a, b) {
        return a - b
    }
)

console.log(numbers)

const indexValue = numbers.findIndex(
    function (a) {
        return a === 2
    }
)

console.log(indexValue)

const multiplied = numbers.map(
    function (num) {
        return 'Value: ' + num * 5
    }
)
console.log(multiplied)

