const numero = prompt(
  'Olá, eu sou o Robô da tabuada\n' +
    'Informe o número que você deseja calcular a tabuada:'
)
let res = ''

for (let fator = 1; fator <= 20; fator++) {
  res += ' -> ' + numero + ' * ' + fator + ' = ' + (numero * fator) + '\n'
}

alert('Resultado da tabuada de ' + numero + ':\n\n' + res)