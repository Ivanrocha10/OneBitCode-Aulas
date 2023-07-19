function dobro(x) {
  console.log('O dobro de ' + x + ' é ' + x * 2)
}
dobro(5)
dobro(2)
dobro(3)
console.log('//////////')

dobro()
console.log('//////////')

function dizerHello(name = 'mundo') {
  console.log('Olá, ' + name + '!')
}
dizerHello('Ivan')
dizerHello()
console.log('//////////')

function soma(a, b) {
  console.log('Resultado da soma é ' + (a + b))
}
soma(1, 2)
soma(9, 1)
console.log('//////////')

function suma(a, b, c, d, e) {
  console.log('Resultado da soma é ' + (a + b + c + d + e))
}
suma(1, 2, 3, 4, 5)
console.log('//////////')

function criarUser(nome, email, senha, tipo = 'adm') {
  const user = {
    nome, // mesmo que nome: nome
    email, // mesmo que email: email
    senha, // mesmo que senha: senha
    tipo // mesmo que tipo: tipo
  }
  console.log(user)
}
criarUser('Ivan', 'ivan.rocha.0987@gmail.com', 'ivan1234', 'Chefe')
criarUser('Chefe', 'ivan1234', 'ivan.rocha.0987@gmail.com', 'Ivan')
console.log('//////////')

function newUser(email, nome = 'user', senha = '1234', tipo = 'admin') {
  //sempre por os paramentros opcionais por ultimo. ex: nome, email, senha, tipo = 'adm'
  const user1 = {
    nome,
    email,
    senha,
    tipo
  }
  console.log(user1)
}
newUser('Ivan', 'admin', 'ivan.rocha.0987@gmail.com', 'ivan1234')
console.log('//////////')



function poucosParametros(usuario) {
  usuario.nome
  usuario.email
  usuario.telefone
  usuario.senha
  usuario.aniversario
  usuario.endereco
}

const dadosDoUser = {
  nome: 'Ivan',
  email: 'ivan@gmail.com',
  telefone: '(41) 98468-5317',
  senha: 'ivan1234',
  aniversario: '19/09',
  endereco: 'Rua Cleiton'
}

poucosParametros(dadosDoUser)
console.log(dadosDoUser)