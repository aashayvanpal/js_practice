function hello1() {
    console.log('hello1')
}

function hello2() {
    console.log('hello2')
    console.log('---')
    clearInterval(myFunction)

}

setTimeout(hello1, 1000)


const myFunction = setInterval(hello2, 3000)