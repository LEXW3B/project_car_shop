import CarsModelODM from '../Models/Cars.Model';
import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';

export default class CarsService {
  private carModelODM: CarsModelODM;

  constructor() {
    this.carModelODM = new CarsModelODM();
  }

  private createCarDomain(cars: ICar | null): Car | null {
    if (cars) return new Car(cars);
    return null;
  }
  
  public async create(car: ICar): Promise<Car | null> {
    const newCars = await this.carModelODM.create(car);
    return this.createCarDomain(newCars);
  }

  public async findAllCars(): Promise<(Car | null)[]> {
    const cars = await this.carModelODM.findAllCars();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async findById(id: string) {  
    if (id) {
      const car = await this.carModelODM.findById(id);
      return this.createCarDomain(car);
    }
  }

  public async update(id: string, obj: ICar) {
    const updating = await this.carModelODM.update(id, obj);
    return this.createCarDomain(updating as ICar);
  }

  public async delete(id: string) {
    await this.carModelODM.delete(id);
  }
}
