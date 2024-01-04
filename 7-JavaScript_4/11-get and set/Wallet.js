class Wallet {
  #amount
  #username

  constructor() {
    this.#amount = 100.99 * 100 // 10099
    console.log(this.#amount)
  }

  get amount() {
    return this.#amount / 100
  }

  set userName(newUserName) {
    if (typeof newUserName === 'string') {
      this.#username = newUserName
    } else {
      console.log('[ERROR]')
    }
  }

  get userName() {
    return this.#username
  }
}

const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.userName = 'Ivan'
console.log(myWallet.userName)

myWallet.userName += ' Pontes'
console.log(myWallet.userName)

myWallet.userName = true
console.log(myWallet.userName)
