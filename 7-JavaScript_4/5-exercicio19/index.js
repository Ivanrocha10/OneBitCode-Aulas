const Author = require('./Author')

const john = new Author('Ivan Rocha')

const post = john.whitePost('Natal feliz', 'Lorem ipsum dolor sic....')
post.addComment('Issac', 'Muito bomm')
post.addComment('Lucas', 'Muito ruimm')

console.log(john)
console.log(post)
