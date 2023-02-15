import { Schema, UpdateQuery, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarsModelODM extends AbstractODM<ICar> {
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
    super(schema, 'Car');
  }

  public create(cars: ICar): Promise<ICar> {
    return this.model.create({ ...cars });
  }

  public async findAllCars(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  public async update(_id: string, obj: UpdateQuery<ICar>) {
    if (!isValidObjectId(_id)) throw new Error('ID INVALID');

    const updating = await this.model.findByIdAndUpdate({ _id }, { ...obj }, { new: true });
    return updating;
  }
}
