// pendente - pending
// resolvida - resolved
// rejeitada - rejected
// finalizada

function execute() {
  // faz algo
  return new Promise((resolve, reject) => {
    console.log('A Promise está sendo executada....')
    setTimeout(() => {
      console.log('Resolvendo a Promise...')
      resolve('Resultado')
    }, 1)
  })
}

const p = execute()

console.log(p)

setTimeout(() => {
  console.log(p)
}, 1000 * 4)