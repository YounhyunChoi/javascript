let promise = new Promise((resolve, reject) => resolve('done'))

//promise.then(console.log, console.log)
//promise.then(console.log, null)
promise.then(console.log)
promise.catch(console.log)

// 과제: 1초 뒤에, resolve 하라.
promise = new Promise((resolve, reject) => 
    setTimeout(() => resolve('done'), 1000))
promise.then(console.log, console.log)

//
promise = new Promise((resolve, reject) => 
    setTimeout(() => reject(new Error('error')), 1000))
promise.then(result => console.log(1, result),
            result => console.log(2, result))