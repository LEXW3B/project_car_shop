
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/Cars.Service';
import { Request, Response, NextFunction } from 'express';

export default class carsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private carsService: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carsService = new CarsService();
  }

  public async create() {
    const car: ICar = this.req.body;
    const newCar = await this.carsService.create(car);
    return this.res.status(201).json(newCar);
  }
};