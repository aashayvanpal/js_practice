// Array methods
// concat()
const num1 = [10, 20, 30, 40, 50, 60]
const num2 = [70, 80, 90, 100]
const names = ['person1', 'person2', 'p3', 'p4', 'person2']
const combinedNumbers = num1.concat(num2)
console.log('combinedNumbers:', combinedNumbers)


// entries()
const pairs = names.entries()
// console.log('entries:',num1.entries())
for (let item of pairs) {
    console.log(item)
}

// filter()
numberFiltered = combinedNumbers.filter(function (item) {
    return item > 30
})
console.log('numberFiltered:', numberFiltered)

// find()
const nameFound = names.find(function (person) {
    return person == 'person2'
})
console.log('nameFound:', nameFound)


// findIndex() - finds first index value and returns that value
const indexFound = names.find(function (person) {
    return person == 'person2'
})
console.log('indexFound:', indexFound)

// indexOf()
const indexOfFound = names.indexOf('person2')
console.log('indexOfFound:', indexOfFound)
// lastIndexOf()
const lastIndexOfFound = names.lastIndexOf('person2')
console.log('lastIndexOfFound:', lastIndexOfFound)
// forEach()

console.log('forEach Names:')
names.forEach(function (name) {
    console.log(name)
})
// includes()
const includesOutput = names.includes('person1')
console.log(includesOutput)

// isArray()
console.log(Array.isArray(names))
// join()

console.log(names.join(""))


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
