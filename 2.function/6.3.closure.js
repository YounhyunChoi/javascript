function makeFn() {
    let userName = 'parker'

    function displayuserName() {
        console.log(userName)
    }

    return displayuserName
}

let myFn = makeFn()

myFn()