function test() {
    console.log(x)//undefined
    var x
    x = 10
    console.log(x)//10
    for (var i = 0; i < 1; i++) {
        var x
        x = 20
        console.log(x)//20
    }
    console.log(x)//10 or 20

    call()
    //function declaration
    function call() {
        console.log('call')
    }

    //check()
    //function expression
    var check
    check = function () {
        console.log('check')
    }
    check()
}
test()