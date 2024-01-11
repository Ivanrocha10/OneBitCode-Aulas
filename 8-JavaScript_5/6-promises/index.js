function execute() {
  return new Promise((resolve, reject) => {
    console.log('Está sendo executada..')
    setTimeout(() => {
      console.log('Resolvendo...')
      resolve('Resultado')
    }, 1000)
  })
}

const p = execute()

console.log(p)

setTimeout(() => {
  console.log(p)
}, 2000)