import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(Cars: ICar) {
    super(Cars);
    this.doorsQty = Cars.doorsQty;
    this.seatsQty = Cars.seatsQty;
  }
}