class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log('Login realizado com sucesso!')
    } else {
      console.log('[ERROR] Email ou senha invalidos!')
    }
  }
}

const john = new User('John Doe', 'john123@gmail.com', 'john12345')

console.log(john)
john.login('john321@gmail.com', 'john234')
john.login('john123@gmail.com', 'john12345')
