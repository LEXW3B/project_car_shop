import MotorcycleModelODM from '../Models/Motorcycles.Model';
import IMotorcycles from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';

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

  public async findAllMotorcycles(): Promise<(Motorcycle | null)[]> {
    const cars = await this.motorcycleModelODM.findAllMotorcycles();
    return cars.map((bick) => this.createBickDomain(bick));
  }

  public async findByIdMotorcycles(id: string) {  
    if (id) {
      const IdMotorcycles = await this.motorcycleModelODM.findByIdMotorcycles(id);
      return this.createBickDomain(IdMotorcycles);
    }
  }

  public async update(id: string, obj: IMotorcycles) {
    const updating = await this.motorcycleModelODM.update(id, obj);
    return this.createBickDomain(updating as IMotorcycles);
  }

  public async delete(id: string) {
    await this.motorcycleModelODM.delete(id);
  }
}