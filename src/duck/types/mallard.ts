import Duck from './../duck'
import { normalFlight } from './../behaviours/fly'
import { normalQuack } from './../behaviours/quack'

export default class Mallard extends Duck {
  constructor() {
    super(normalFlight, normalQuack)
    this.displayInfo = 'Looks .. mallardy'
    console.log('Mallard Constructed!')
  }

}
