export class BytesConverter {

  items: string[];

  constructor() {
    this.items = [];
  }

  push(arg:string) {
    this.items.push(arg);
  }
}

export default new BytesConverter();
