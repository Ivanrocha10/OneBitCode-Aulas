const a = 0 // false

const b = null // false

const c = 'Test' // true

console.log(a || b || c)

console.log(a ?? b ?? c)

console.log(b ?? c)

console.log('/////////////////')

let z = 0
let x = a || 42

console.log({ z, x })

x = a ?? 42

console.log({ z, x })

let y = false ?? 42

console.log({ y })
