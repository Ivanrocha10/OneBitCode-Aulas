let pessoa = {
  nome: 'Ivan',
  idade: 26,
  dizerHello() {
    console.log('Olá, mundo! Meu nome é ' + this.nome)
  }
}

console.log(pessoa)
pessoa.dizerHello()
