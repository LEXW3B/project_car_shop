import { Schema, UpdateQuery, isValidObjectId } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleModelODM extends AbstractODM<IMotorcycles> {
  constructor() {
    const schema = new Schema<IMotorcycles>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  public create(bick: IMotorcycles): Promise<IMotorcycles> {
    return this.model.create({ ...bick });
  }

  public async findAllMotorcycles(): Promise<IMotorcycles[]> {
    return this.model.find();
  }

  public async findByIdMotorcycles(id: string): Promise<IMotorcycles | null> {
    return this.model.findById(id);
  }

  public async update(_id: string, obj: UpdateQuery<IMotorcycles>) {
    if (!isValidObjectId(_id)) throw new Error('ID INVALID');

    const updating = await this.model.findByIdAndUpdate({ _id }, { ...obj }, { new: true });
    return updating;
  }

  public async delete(id: string) {
    await this.model.findByIdAndDelete(id);
  }
}