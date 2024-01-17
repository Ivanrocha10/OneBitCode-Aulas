// async function asyncSum(a, b) {
//   return a + b
// }

// function asyncSubtract(a, b) {
//   return a - b
// }

// const subtractResult = asyncSubtract(50, 33)
// const sumResult = asyncSum(50, 33)

// Promise.all([subtractResult, sumResult])
//   .then(results => {
//     console.log(results)
//   })
//   .catch(err => {
//     console.log(err)
//   })

const numbers = [4, 9, 5, 3, 13, 77]

async function asyncSquare(x) {
  return x * x
}

Promise.all(numbers.map(number => asyncSquare(number)))
  .then(squares => {
    console.log(squares)
  })
  .catch(err => {
    console.log(err)
  })
