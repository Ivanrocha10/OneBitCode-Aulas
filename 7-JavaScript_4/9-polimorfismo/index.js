class Vehicle {
  move() {
    console.log('O veículo está se movendo')
  }
}

class Car extends Vehicle {
  move() {
    console.log('O carro está se movendo')
  }
}

class Ships extends Vehicle {
  move() {
    console.log('O navio está se movendo')
  }
}

class place extends Vehicle {
  move(speed) {
    console.log(`O aviao esta voando a ${speed} KM/h`)
  }
}

const delorean = new Car()

const blackPearl = new Ships()

const epoch = new place()

delorean.move()
blackPearl.move()
epoch.move(80)

function start(vehicle) {
  console.log('Iniciando um veiculo')
  vehicle.move()
}

console.log('///////////////////')

start(delorean)
start(blackPearl)
start(epoch)
