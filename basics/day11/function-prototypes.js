// call() , apply() and bind()
// call example
const person = {
    fullName : function(){
        return this.firstName + " " + this.lastName
    }
}


const person1 = {
    firstName: 'aashay',
    lastName: 'vanpal',
}

const person2 = {
    firstName: 'Pratheebhan',
    lastName: 'Sarvanan',
}

console.log(person.fullName.call(person1))
console.log(person.fullName.call(person2))




const greet = function(part1,part2){
    return `${part1} ${this.firstName}. ${part2}`
}

console.log(greet.call(person1,"hello!","how are you??"))
// apply method takes argument as an array
console.log(greet.apply(person1,["hello!","how are you with apply method??"]))


//  bind() binds object to function
const bound = greet.bind(person2)
console.log(bound("hello!","how are you with bind method??"))
