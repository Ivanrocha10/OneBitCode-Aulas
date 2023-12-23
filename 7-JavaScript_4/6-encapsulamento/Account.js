class Account {
  #password
  #balance = 10
  constructor(user) {
    this.email = user.email
    this.#password = user.password
    this.#balance = 10
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance
    } else {
      return null
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password
  }
}

const user = {
  email: 'Ivan@gmail.com',
  password: '12345'
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance('Ivan@gmail.com', '12345'))
