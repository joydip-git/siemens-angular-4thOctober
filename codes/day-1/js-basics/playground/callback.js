function filterValues(arr, logicFn) {

    const resultant = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const status = logicFn(element)
        if (status) {
            resultant.push(element)
        }
    }
    return resultant
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function isEven(num) {
    // if (num % 2 === 0)
    //     return true
    // else
    //     return false
    return num % 2 === 0
}

const result = filterValues(numbers, isEven)
for (let index = 0; index < result.length; index++) {
    const element = result[index];
    console.log(element)
}

function call() {
    alert('called')
}

const oddNumbers = filterValues(
    numbers,
    function (num) {
        return num % 2 !== 0
    }
)

console.log(oddNumbers)