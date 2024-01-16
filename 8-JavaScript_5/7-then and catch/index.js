function execute() {
  // faz algo
  return new Promise((resolve, reject) => {
    console.log('A Promise está sendo executada....')
    setTimeout(() => {
      if (false) {
        reject(false)
      } else {
        console.log('Resolvendo a Promise...')
        resolve(42)
      }
    }, 2)
  })
}

execute()
  .then(result => {
    console.log(`A Promise foi resolvida. Resultado: ${result}`)
  })
  .catch(err => {
    console.log(`A Promise foi rejeitada. Motivo: ${err}`)
  })
  .finally(() => {
    console.log('A Promise foi finalizda.')
  })
