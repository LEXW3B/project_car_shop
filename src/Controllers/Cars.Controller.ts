import { Request, Response, NextFunction } from 'express';
import CarsService from '../Services/Cars.Service';

export default class CarsController {
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
    try {
      const { body } = this.req;
      const newCar = await this.carsService.create({ ...body, status: body.status || false });
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllCars() {
    try {
      const cars = await this.carsService.findAllCars();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const cars = await this.carsService.findById(id);
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }
}
