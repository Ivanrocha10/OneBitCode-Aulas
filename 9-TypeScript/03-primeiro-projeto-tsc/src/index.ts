function sendSpaceship(name:string, captain:string) {
  const spaceship = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: []
  }
  alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada para a missão`)
  return spaceship
}

function accelerate(targetSpeed:number, spaceship: {name : string, speed: number}) {
  if (spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
  } else if (spaceship.speed < targetSpeed) {
  alert(`Acelerando a ${spaceship.name} para ${targetSpeed}...`)
  } else {
    alert('Mantendo a velocidade da ${spaceship.name}...')
  }
}

const spaceshipName = prompt('Insira o nome da nave')
const spaceshipCaptain = prompt('Insira o nome do capitão da nave')

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)

const speed = Number(prompt('Insira a velocidade desejada.'))

accelerate(speed, currentShip)