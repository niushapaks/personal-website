export default class Nav {
  private route: string;
  private label: string;

  constructor(route: string, label: string) {
    this.route = route;
    this.label = label;
  }

  public getRoute(){
      return this.route;
  };

  public getLabel(){
      return this.label;
  }
}