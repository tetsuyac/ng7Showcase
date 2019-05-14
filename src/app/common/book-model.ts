export class BookModel {
  title: string;
  desc: string;
  price: number;
  unit: number;
  total: number;

  constructor(title: string, desc: string, price: number, unit: number, total: number) {
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.unit = unit;
    this.total = total;
  }
}
