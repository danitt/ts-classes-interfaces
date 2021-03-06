import Mallard from './duck/types/mallard'
import RubberDuck from './duck/types/rubber'
import ModelDuck from './duck/types/model'

console.log(`\n### CONSTRUCTING`)
const mallard = new Mallard()
const rubber = new RubberDuck()
const model = new ModelDuck()

console.log(`\n### FLYING`)
console.log(`Mallard: ${ mallard.fly() }`)
console.log(`Rubber Duck: ${ rubber.fly() }`)
console.log(`Model Duck: ${ model.fly() }`)

console.log(`\n### QUACKING`)
console.log(`Mallard: ${ mallard.quack()}`)
console.log(`Rubber Duck: ${ rubber.quack() }`)
console.log(`Model Duck: ${ model.quack() }`)

console.log(`\n### DISPLAYING`)
console.log(`Mallard: ${ mallard.display() } `)
console.log(`Rubber Duck: ${ rubber.display() }`)
console.log(`Model Duck: ${ model.display() }`)


console.log(`\n### TURKEY ADAPTOR`)
import WildTurkey from './turkey/types/wild'
import TurkeyAdaptor from './turkey/turkey.adaptor'
const wildTurkey = new TurkeyAdaptor(new WildTurkey)
console.log(`Wild Turkey Fly! ${wildTurkey.fly()}`)
console.log(`Wild Turkey Quack! ${wildTurkey.quack()}`)
console.log(`Wild Turkey Display! ${wildTurkey.display()}`)
console.log(`\n`)
