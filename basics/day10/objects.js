const person = {}
const person2 = new Object()

const person1 ={
    name: 'Kevin',
    age: 'Kevin',
    phonenumber: '3215648791',
    possession: ['bike','car','house','private jet'],
    sayHello(){
    console.log(this.name + ' said hi')
}}
person1.possession[3] = 'airport'


console.log(person1)
person.name = "Pratheebhan"


console.log(person)

delete person.name
console.log("deleted key name: ",person)

console.log(person1)
person1.sayHello()