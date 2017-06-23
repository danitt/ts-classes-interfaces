import Turkey from './../turkey'

export default class WildTurkey extends Turkey {
  constructor() {
    super(
      () => 'Turkle Whoosh',
      () => 'Gooooble Moo Buzz'
    )
    this.displayInfo = 'Turrrrkey'
    console.log('Wild Turkey Constructed!')
  }


}
