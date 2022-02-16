class Customer {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }
    getName() {
        return `the user name is :${this.name}`
    }
    // getter and setter 
    get myName() {
        return this.name
    }
    set myNameToSet(name) {
        this.name = name
    }
}

class Admin extends Customer {
    constructor(name, age, gender, role) {
        super(name, age, gender)
        this.role = role
    }
}
const c1 = new Customer('aashay', 25, 'M')
const a = new Admin('aashay the admin', 25, 'M', 'Admin')
console.log(c1)
console.log(c1.getName())
console.log(a)
console.log('whats is my name ?:', c1.myName)
c1.myNameToSet = 'new aashay set name'
console.log('whats is my name ?:', c1.myName)
console.log(typeof (c1))
console.log('whats is my name Admin?:', a.myName)
