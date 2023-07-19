function calcularMedia(a, b) {
  const media = (a + b) / 2
  return media
}

const resultado = calcularMedia(7, 2)
console.log(resultado)
console.log('/////')

function criarProduto(nome, preco) {
  const produto = {
    nome, // nome: nome
    preco, // preco: preco
    estoque: 1
  }
  return produto
}
const notebook = criarProduto('Notebook Intel', 2500)
console.log(notebook)
// OU
console.log(criarProduto('Notebook Intel', 2500))
console.log('/////')

function areaRetangular(base, altura) {
  return base * altura
}
console.log(areaRetangular(3, 5))
console.log('/////')

function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}
console.log(areaQuadrada(9))
console.log('/////')

// Forma "errada", o return só retorna uma vez:
function hello() {
  let texto = '...'
  return texto
  texto = 'olá, mundo'
  console.log(texto)
}
console.log(hello())
console.log('/////')

// Forma "Certa", o return só retorna uma vez:
function ceu() {
  let text = '...'
  text = 'olá, mundo'
  console.log(text)
  return text
}
console.log(ceu())
console.log('/////')

// Varios return em uma function, porem com varias "ramificações"
function maioridade(idade) {
  if (idade >= 18) {
    return 'Maior de idade'
  } else {
    return 'Menor de idade'
  }
}
console.log(maioridade(29))
console.log(maioridade(13))
