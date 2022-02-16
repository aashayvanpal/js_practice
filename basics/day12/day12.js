console.log('i am javascript file loaded')


// console.log('window object', window)

// alert box
// window.alert('hello')

// returns true or false boolean value
// console.log(window.confirm('are you sure ?'))

function func1() {
    // console.log(5)
    return 5
    // console.log("inside func1")   // this like is skipped as it is below the return keyword
}

console.log(func1) // returns f with the function
console.log(func1())

var num = func1()
console.log('num:', num)

// compile , intrepreted - JS and JAVA 
// return and console log different

arr1 = []
console.log(arr1.push('Pratheebhan')) //1
console.log(arr1.push(func1)) //2 
console.log(arr1) // output : [ 'Pratheebhan', [Function: func1] ]
console.log(arr1[0])
console.log(arr1[1])

// how to execute/call / invoke a function ? - we use -  ()  after the function name
console.log(arr1[1]())

// pop() method returns the last element of the array 
console.log(arr1.pop())   // last element is removed
console.log(arr1.shift()) // first element is removed
console.log(arr1.unshift('Aashay', 'rohit', 'mohan'))
console.log(arr1)



// objects
obj = {}
obj.name = "Pratik"
obj.age = 50
console.log(obj)

