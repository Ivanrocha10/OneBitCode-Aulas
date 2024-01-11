console.log('Programa Iniciado!')

const timeoutId = setTimeout(() => {
  console.log('3 segundos se passaram.')
}, 1000 * 3)

clearTimeout(timeoutId)

console.log('//////////////')
console.log('Programa Iniciado!')

let seconds = 0

const intervalId = setInterval(() => {
  seconds += 3
  console.log(`Se passaram ${seconds} segundos.`)
  if (seconds > 10) {
    clearInterval(intervalId)
    console.log('Tempo esgotado!')
  }
}, 1000 * 3)
