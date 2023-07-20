function calc(a, b, operacao) {
  console.log('Realizando uma operação.')
  const res = operacao(a, b)
  return res
}

function somar(x, y) {
  console.log('Realizando uma soma.')
  return x + y
}

console.log(calc(3, 5, somar))

console.log(
  calc(8, 4, function (x, y) {
    console.log('Realizando uma subtração.')
    return x - y
  })
)
console.log('//////')

function exibirElemento(elemento, indice, array) {
  console.log({ elemento, indice, array })
}

const lista = ['Maça', 'Banana', 'Laranja', 'Limão']

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}
console.log('//////')

lista.forEach(exibirElemento)
console.log('//////')

lista.forEach(function (elemento, indice, array) {
  console.log(elemento, indice, array)
})
