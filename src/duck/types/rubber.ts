import Duck from './../duck'
import { noFlight } from './../behaviours/fly'
import { squeekyQuack } from './../behaviours/quack'

export default class RubberDuck extends Duck {
  constructor() {
    super(noFlight, squeekyQuack)
    this.displayInfo = `Rubbery. The rubberiest, even.`
    console.log('Rubber Duck Constructed!')
  }

}
