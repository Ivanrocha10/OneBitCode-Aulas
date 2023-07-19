let velo = 80

while (velo > 0) {
  alert('O carro está a ' + velo + ' Km/h')
  velo -= 20
  alert('Diminuindo 20Km/h')

  if (velo === 40) {
    break
  }
}

alert('O carro permaneceu a 40Km/h')
