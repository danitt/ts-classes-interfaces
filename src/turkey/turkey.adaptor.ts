import Duck from '../duck/duck'
import Turkey from './turkey'

export default class TurkeyAdaptor implements Duck {
  public displayInfo
  constructor(private turkey: Turkey) {
    this.displayInfo = turkey.displayInfo
  }
  fly = () => this.turkey.fly()
  quack = () => this.turkey.gobble()
  display = () => this.displayInfo
}
