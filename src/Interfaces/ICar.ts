import { Schema, model } from 'mongoose';

export default interface ICar {
  id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  doorsQty: number,
  seatsQty: number
};

const CarsSchema = new Schema<ICar>({
  id: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: { type: Boolean, required: true },
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
});

const Car = model<ICar>('Car', CarsSchema);