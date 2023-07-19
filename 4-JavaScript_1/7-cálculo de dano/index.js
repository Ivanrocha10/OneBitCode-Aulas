let attacker = prompt('Qual é o nome do atacante?')
let defender = prompt('Qual é o nome do defensor?')
let attackPower = parseFloat(prompt('Qual é o seu poder de ataque?'))
let defensePower = parseFloat(prompt('Qual é o seu poder de defesa?'))
let healthPoints = parseFloat(prompt('Quantos pontos de vida ele possui?'))
let shield = prompt('Ele possui um escudo? (SIM/NÃO)')
let damageDone = 0

if (attackPower > defensePower && shield === 'Não') {
  damageDone = attackPower - defensePower
} else if (attackPower > defensePower && shield === 'Sim') {
  damageDone = (attackPower - defensePower) / 2
}

healthPoints -= damageDone

alert(attacker + ' causou ' + damageDone + ' pontos de dano em ' + defender)
alert(
  '\nDados do ' +
    attacker +
    '\nPoder de ataque: ' +
    attackPower +
    '\n\n' +
    'Dados do ' +
    defender +
    '\nPontos de vida: ' +
    healthPoints +
    '\nPoder de defesa: ' +
    defensePower +
    '\nPossui escudo: ' +
    shield
)
