function test() {
    //console.log(x)//undefined
    let x = 10
    console.log(x)//10
    for (let i = 0; i < 1; i++) {
        let x = 20
        console.log(x)//20
    }
    console.log(x)//10

    call()
    //function declaration
    function call() {
        console.log('call')
    }

    //check()
    //function expression
    let check = function () {
        console.log('check')
    }
    check()
}
test()