class Wallet {
  #amount
  constructor() {
    this.#amount = 100.99 * 100 // 10099
    console.log(this.#amount)
  }

  get amount() {
    return this.#amount / 100
  }

  set userName(newUserName) {
    
  }
}

const myWallet = new Wallet()

console.log(myWallet.amount)
