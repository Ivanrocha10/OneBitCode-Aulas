import { Spaceship } from './export'
import lodash from 'lodash'

interface BattleSpaceship extends Spaceship {
  weapons: number
}

let xwing: BattleSpaceship = {
  name: 'X-Wing',
  pilot: 'Luke Skywalker',
  weapons: 5,
  speed: 50
}

console.log(lodash.camelCase(xwing.pilot))
console.log(lodash.kebabCase(xwing.pilot))
