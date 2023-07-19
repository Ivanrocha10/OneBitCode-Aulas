const cheap = []
let option = ''

do {
  option = prompt(
    'Cartas no baralho: ' +
      cheap.length +
      '\n' +
      '\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair'
  )

  switch (option) {
    case '1':
      const newLetter = prompt('Qual é a carta?')
      cheap.push(newLetter)
      break
    case '2':
      const pullLetter = cheap.pop()
      if (!pullLetter) {
        alert('Não há nenhuma carta no baralho')
      } else {
        alert('Você puxou uma(a) ' + pullLetter)
      }
      break
    case '3':
      alert('Saindo...')
      break
    default:
      alert('[ERRO] Opção inválida!')
  }
} while (option !== '3')
