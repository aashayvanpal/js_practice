console.log("classes Demo!")

class Person {
    constructor(name, email, age, phoneNumber, owesMoney) {
        this.name = name
        this.email = email
        this.age = age
        this.phoneNumber = phoneNumber
        this.owesMoney = owesMoney
    }
    getPersonDetails() {
        return {
            name: this.name,
            email: this.email,
            age: this.age,
            phoneNumber: this.phoneNumber,
        }
    }
    getOwesMoneyTo(personB) {
        return this.owesMoney[personB]
    }
}

const Aashay = new Person('Aashay', 'aashay@gmail.com', 26, 9743419673, {
    'David': 500
}
)
const David = new Person('David', 'david@gmail.com', 50, 4561974561)

console.log("New Person1", Aashay.getPersonDetails())
console.log("New Person2", David.getPersonDetails())
console.log("Amount Aashay Owes to David", Aashay.getOwesMoneyTo('David'))
console.log(this)
console.log(__filename)
console.log(__dirname)
// console.log(global)
global.secret = 'secretValue123'
console.log(global)