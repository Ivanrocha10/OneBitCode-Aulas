function somar(a, b) {
  return a + b
}

let operacao = somar
console.log(operacao(4, 5))
console.log('///////')

operacao = function (a, b) {
  return a - b
}
console.log(operacao(4, 5))
console.log('///////')

olaMundo()
function olaMundo() {
  console.log('Ola, mundo!')
}

const oiMundo = function () {
  console.log('Oi, mundo!')
}
oiMundo()