import { Request, Response, NextFunction } from 'express';
import CarsService from '../Services/Cars.Service';

export default class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private carsService: CarsService;
  private INVALID!: 'Invalid id';
  private NOT_FOUND!: 'Car not found';

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
      return this.res.status(404).json({ message: this.INVALID });
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;

      const obj = {
        model: this.req.body.model,
        year: this.req.body.year,
        color: this.req.body.color,
        status: this.req.body.status,
        buyValue: this.req.body.buyValue,
        doorsQty: this.req.body.doorsQty,
        seatsQty: this.req.body.seatsQty,
      };

      const updating = await this.carsService.update(id, obj);

      return this.res.status(200).json(updating);
    } catch (error) {
      return this.res.status(404).json({ message: this.NOT_FOUND });
    }
  }

  public async delete() {
    try {
      const { id } = this.req.params;
      await this.carsService.delete(id);
      return this.res.status(202);
    } catch (error) {
      return this.res.status(422).json({ message: this.INVALID });
    }
  }
}
