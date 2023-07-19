const primeiroNome = prompt('Informe o primeiro nome do recruta:')
const sobreNome = prompt('Informe o sobrenome do recruta:')
const campoEstudo = prompt('Qual é o campo de estudo do recruta?')
const anoNascimento = prompt('Qual é o ano de nascimento do recruta?')
alert(
  'Recruta cadastrado com sucesso!\n' +
    '\nDados: ' +
    '\nNome completo: ' +
    primeiroNome +
    ' ' +
    sobreNome +
    '\nCampo de Estudo: ' +
    campoEstudo +
    '\nIdade: ' +
    (2023 - anoNascimento)
)
