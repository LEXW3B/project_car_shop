import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/Motocycle.Service';

export default class MotocycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private motorcyclesService: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motorcyclesService = new MotorcyclesService();
  }

  public async create() {
    try {
      const { body } = this.req;
      const newCar = await this.motorcyclesService
        .create({ ...body, status: body.status || false });
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}