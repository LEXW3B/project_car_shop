import IMotorcycle from '../Interfaces/Motorcycles';

export default class Motorcycle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    this.id = moto.id;
    this.model = moto.model;
    this.year = moto.year;
    this.color = moto.color;
    this.status = moto.status || false;
    this.buyValue = moto.buyValue;
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }
}