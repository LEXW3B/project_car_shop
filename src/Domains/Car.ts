import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(Cars: ICar) {
    this.id = Cars.id;
    this.model = Cars.model;
    this.year = Cars.year;
    this.color = Cars.color;
    this.status = Cars.status || false;
    this.buyValue = Cars.buyValue;
    this.doorsQty = Cars.doorsQty;
    this.seatsQty = Cars.seatsQty;
  }
}