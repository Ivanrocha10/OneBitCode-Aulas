const turi = prompt('E aí, turista! Qual é o seu nome?')
let cidades = ''
let contag = 0

let contin = prompt('Você visitou alguma cidade? (Sim/Não)')

while (contin === 'Sim') {
  let cidade = prompt('Qual é o nome da cidade visitada?')
  cidades += ' - ' + cidade + '\n'
  contag++
  contin = prompt('Você visitou alguma outra cidade? (Sim/Não)')
}

if (contin === 'Sim') {
  alert(
    'Turista: ' +
      turi +
      '\nQuantidade de cidades visitadas: ' +
      contag +
      '\nCidades visitadas:\n' +
      cidades
  )
} else if (contin === "Não") {
  alert('Turista: ' + turi + '\nQuantidade de cidades visitadas: ' + contag)
}
