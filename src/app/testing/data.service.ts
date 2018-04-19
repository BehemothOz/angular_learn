import { Phone1 } from './phone';

export class DataService {
  private data: Array<Phone1> = [
    { name:"Apple iPhone 7", price: 56000},
    { name: "HP Elite x3", price: 56000},
    { name: "Alcatel Idol S4", price: 25000}
  ];

  getData(): Array<Phone1> {
    return this.data;
  }

  addData(name: string, price: number): void {
    this.data.push(new Phone1(name, price));
  }
}