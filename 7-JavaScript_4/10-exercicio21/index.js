const Mage = require('./Mage')
const Thief = require('./Thief')
const Warrior = require('./Warrior')

const ana = new Mage('Ana', 90, 4, 2, 14)
const ivan = new Thief('Ivan', 140, 22, 8)
const fabio = new Warrior('Fabio', 200, 14, 12, 4)

console.table({ ivan, ana, fabio })

fabio.switchStance()
ivan.attack(fabio)
ana.attack(ivan)

console.table({ ivan, ana, fabio })

fabio.switchStance()
fabio.attack(ivan)
ivan.heal(ivan)
ana.attack(fabio)

console.table({ ivan, ana, fabio })
