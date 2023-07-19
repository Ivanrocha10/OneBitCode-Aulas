let car1 = prompt('Informe o nome do primeiro veículo:')
let car2 = prompt('Informe o nome do segundo veículo:')
let speed1 = parseFloat(prompt('Informe a velocidade do primeiro veículo:'))
let speed2 = parseFloat(prompt('Informe a velocidade do segundo veículo:'))
let res = alert(
  `O ${car1} está a ${speed1}Km/h e o ${car2} está a ${speed2}Km/h.`
)

if (speed1 > speed2) {
  alert(car1 + ' é mais rápido do que o ' + car2)
} else if (speed2 > speed1) {
  alert(car2 + ' é mais rápido do que o ' + car1)
} else {
  alert(car1 + ' e ' + car2 + ' possuem velocidades iguais.')
}

console.log(res)
