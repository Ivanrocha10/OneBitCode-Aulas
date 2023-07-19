const numero1 = prompt('Informe o primeiro número:')
const numero2 = prompt('Informe o segundo número:')

const x = parseFloat(numero1)
const y = parseFloat(numero2)

const soma = x + y
const sub = x - y
const mult = x * y
const div = x / y
const res = x % y

alert(
  `Os números ${x} e ${y} dão o resultado: ` +
    `\nCalculando.... \n` +
    '\nSoma: ' +
    soma +
    '\nSubtração: ' +
    sub +
    '\nMultiplicação: ' +
    mult +
    '\nDivisão: ' +
    div +
    '\nRestante: ' +
    res
)
