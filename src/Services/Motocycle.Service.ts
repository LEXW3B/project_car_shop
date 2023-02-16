import IMotorcycles from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleModelODM from '../Models/Motorcycles.Model';

export default class MotorcyclesService {
  private motorcycleModelODM: MotorcycleModelODM;

  constructor() {
    this.motorcycleModelODM = new MotorcycleModelODM();
  }

  private createBickDomain(bick: IMotorcycles | null): Motorcycle | null {
    if (bick) return new Motorcycle(bick);
    return null;
  }

  public async create(bick: IMotorcycles): Promise<Motorcycle | null> {
    const newbicks = await this.motorcycleModelODM.create(bick);
    return this.createBickDomain(newbicks);
  }
}