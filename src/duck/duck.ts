import { flyableInterface } from './behaviours/fly'
import { quackableInterface } from './behaviours/quack'

export default class Duck {
  public fly
  public quack
  protected displayInfo: string = 'Nothing to display!'

  constructor(
    flyBehaviour: flyableInterface,
    quackBehaviour: quackableInterface
  ) {
    this.fly = flyBehaviour.perform
    this.quack = quackBehaviour.perform
  }

  display = () => this.displayInfo
}
