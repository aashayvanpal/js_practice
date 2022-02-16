// reduce()
const reducedValue =num1.reduce(function(sum,acc){
    return sum+=acc
})
console.log("reducedValue", reducedValue)

// shift() - removes the first element of the array
num1.shift()
console.log(num1)
// unshift() - adds new element at the beggening of the array
num1.unshift(9)
console.log(num1)

// slice()-  returns selected elements in an array, as a new array.
console.log("slice -",num1.slice(1,5))


// splice() - method adds and/or removes array elements.
// splice(<at position> , <remove value> ,<add value>)
console.log(num1)
console.log(num1.splice(0,4,"99"))



// toString()


// Arrow functions 
const a = ()=> {}

// All types of loops in js