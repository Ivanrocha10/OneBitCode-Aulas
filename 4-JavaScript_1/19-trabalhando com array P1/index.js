const arr = [
  'Frodo',
  'Sam',
  'Merry',
  'Pippin',
  'Gandalf',
  'Aragorn',
  'Legolas',
  'Gimli'
]
console.log(arr)

// Adicionar Elementos
// push

let size = arr.push('Ana')
console.log(arr)
console.log(size)

// unshift

size = arr.unshift('Ivan')
console.log(arr)
console.log(size)

// Remover Elementos
// pop

let lastElement = arr.pop()
console.log(arr)
console.log(lastElement)

// Shift

lastElement = arr.shift()
console.log(arr)
console.log(lastElement)

// Pesquisar por um Elemento
// includes

const inclui = arr.includes('Gandalf')
console.log(inclui)

// indexOf

const indice = arr.indexOf('Gandalf')
console.log(indice)

// Cortar e Concatenar
// slice

const hobbits = arr.slice(0, 4)
const others = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(others)

// concat

const society = others.concat(hobbits, 'Rocha')
console.log(society)

// Substituição dos Elementos
// splice

const elementsRemoved = society.splice(indice, 3, 'Brocha')
console.log(society)
console.log(elementsRemoved)

// Iterar sobre os Elementos

for (let indice = 0; indice < society.length; indice++) {
  const element = society[indice]
  console.log(element + ' se encontra na posição ' + indice)
}
