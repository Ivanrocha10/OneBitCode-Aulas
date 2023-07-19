let row = []
let option = ''

do {
  let patients = ''
  for (let i = 0; i < row.length; i++) {
    patients += i + 1 + '° - ' + row[i] + '\n'
  }

  option = prompt(
    'Pacientes:\n' +
      patients +
      '\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair'
  )
  switch (option) {
    case '1':
      const newPatient = prompt('Qual é o nome do paciente?')
      row.push(newPatient)
      break
    case '2':
      const consultedPatient = row.shift()
      if (consultedPatient) {
        alert(consultedPatient + ' foi atendido com sucesso!!')
      } else {
        alert('Não há pacientes na fila!')
      }
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('[Error] Opção inválida!')
  }
} while (option !== '3')
