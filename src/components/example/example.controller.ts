import BytesConverter from '../../services/BytesConverter.ts';

export default class ExampleController {

  public text : string;
  public things : string[];

  constructor() {
    this.text = "thing!";
    this.things = BytesConverter.items;
  }

  pushThing() {
    BytesConverter.push(JSON.stringify(Math.random() * 5));
  }
}
