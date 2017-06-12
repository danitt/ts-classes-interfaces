import Duck from './../duck'
import { noFlight, rocketFlight } from './../behaviours/fly'
import { muteQuack } from './../behaviours/quack'

export default class ModelDuck extends Duck {
  constructor() {
    super(noFlight, muteQuack)
    this.displayInfo = `I don't think that's a real a duck..`
    this.fly = rocketFlight.perform // mutate flight behaviour .. on the .. fly
    console.log('Model Duck Constructed!')
  }

}
