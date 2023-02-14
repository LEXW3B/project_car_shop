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
}
