function sum(param, ...numbers) {
  //Rest sempre por ultimo, sendo o ultimo parametro
  return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2))
console.log(sum(100, 2, 90, 80, 710))
