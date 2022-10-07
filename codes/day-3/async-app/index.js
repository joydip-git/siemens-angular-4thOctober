const divide = function (a, b) {
    const p = new Promise(
        function (resolveFnRef, rejectFnRef) {
            const res = a / b
            if (res === Infinity) {
                //throw new Error('dividing by zero');
                rejectFnRef('dividing by zero')
            }
            resolveFnRef(res)
            //return res
        }
    )
    return p
}

const add = function (a, b) {
    return a + b
}

const divPromise = divide(10, 2)
divPromise
    .then(
        //will be called when prmomise is resolved and passes the result to this callback
        function (data) {
            console.log(data)
        },
        //will be called when prmomise is rejected and passes the error reason to this callback
        function (err) {
            console.log(err)
        }
    )
const addRes = add(10, 2)

console.log(addRes)

// setTimeout(
//     function () {

//     },
//     2000
// )