import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarsModelODM {
  protected model: Model<ICar>;

  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', schema);
  }

  public create(cars: ICar): Promise<ICar> {
    return this.model.create({ ...cars });
  }
}
