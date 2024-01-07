const App = require('./App')

App.createUser('ivan@gmail.com', 'Ivan Rocha')
App.createUser('ana@gmail.com', 'Ana Beatriz')
App.createUser('fabio@gmail.com', 'Fabio Galvao')

App.deposit('ivan@gmail.com', 100)
App.transfer('ivan@gmail.com', 'ana@gmail.com', 20)

App.changeLoanFee(10)
App.takeLoan('fabio@gmail.com', 2000, 24)

console.log(App.findUser('ivan@gmail.com'))
console.log(App.findUser('ivan@gmail.com').account)
console.log('/////')
console.log(App.findUser('ana@gmail.com'))
console.log(App.findUser('ana@gmail.com').account)
console.log('/////')
console.log(App.findUser('fabio@gmail.com'))
console.log(App.findUser('fabio@gmail.com').account)
console.log(App.findUser('fabio@gmail.com').account.loans[0].installments)
