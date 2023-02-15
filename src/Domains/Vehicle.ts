import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(Models: IVehicle) {
    this.id = Models.id;
    this.model = Models.model;
    this.year = Models.year;
    this.color = Models.color;
    this.status = Models.status || false;
    this.buyValue = Models.buyValue;
  }
}