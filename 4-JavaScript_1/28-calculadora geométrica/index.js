function areaTriangulo() {
  const base = prompt('Informe a base do triângulo:')
  const altura = prompt('Informe a altura do triângulo:')
  return (base * altura) / 2
}

function areaRetangulo() {
  const base = prompt('Informe a base do retângulo:')
  const altura = prompt('Informe a altura do retângulo:')
  return base * altura
}

function areaQuadrado() {
  const lado = prompt('Informe o lado do quadrado:')
  return lado * lado
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt('Informe a base maior do trapézio:'))
  const baseMenor = parseFloat(prompt('Informe a base menor do trapézio:'))
  const altura = prompt('Informe a altura do trapézio:')
  return ((baseMaior + baseMenor) * altura) / 2
}

function areaCirculo() {
  const raio = parseFloat(prompt('Informe o raio do círculo:'))
  return 3.14 * raio * raio
}

function menu() {
  return prompt(
    'Calculadora Geométrica\n' +
      '1. Calcular área do triângulo\n' +
      '2. Calcular área do retângulo\n' +
      '3. Calcular área do quadrado\n' +
      '4. Calcular área do trapézio\n' +
      '5. Calcular área do círculo\n' +
      '6. Sair\n'
  )
}

function executar() {
  let opcao = ''

  do {
    opcao = menu()
    let res
    switch (opcao) {
      case '1':
        res = areaTriangulo()
        break
      case '2':
        res = areaRetangulo()
        break
      case '3':
        res = areaQuadrado()
        break
      case '4':
        res = areaTrapezio()
        break
      case '5':
        res = areaCirculo()
        break
      case '6':
        alert('Saindo...')
        break
      default:
        alert('[ERRO] Opção inválida...')
    }

    if (res) {
      alert('Resultado: ' + res)
    }
  } while (opcao !== '6')
}

executar()