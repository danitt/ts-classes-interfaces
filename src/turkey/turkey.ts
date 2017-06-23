export default class Turkey {
  public displayInfo: string = 'Nothing to display!'

  constructor(
    public fly,
    public gobble
  ) {}

  display = () => this.displayInfo
}
