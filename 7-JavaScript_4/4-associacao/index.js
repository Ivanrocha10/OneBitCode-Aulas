const Address = require('./Address')
const Person = require('./Person')

const addr = new Address('7 de Setembro', 99, 'Centro', 'São José', 'PR')
const john = new Person('Ivan Rocha', addr)

console.log(john)
console.log(john.address.fullAddress())
