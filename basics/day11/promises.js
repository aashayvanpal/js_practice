const myPromise = new Promise((resolve, reject) => {
    const connection = true

    if (connection) {
        resolve('connection is established')
    } else {
        reject('connection failed')
    }
})

myPromise.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})


const myNewPromiseObject = new Promise((res, rej) => {
    const checkCondition = false

    if (checkCondition) {
        res('check is success')
    } else {
        rej('check is failed')
    }
}).then(msg => {
    console.log(msg)
}).catch(msg => {
    console.log(msg)
})