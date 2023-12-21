function Book(title, pages, tags, author) {
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity
  }
  this.save = function () {}
}

const author1 = { name: 'Ivan Silva da Rocha' }
const author2 = { name: 'Ana Beatriz' }

const tags1 = ['fantasy', 'adventure', 'suspense']
const tags2 = ['fantasy', 'adventure', 'romance']

const eragon = new Book('Mil maravilhas', 468, tags1, author1)

console.log(eragon)

const eldest = new Book('Sex na hora H', 1000, tags2, author2)

console.log(eldest)
